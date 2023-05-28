import { FC, useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../../store/store';
import { QuotesI } from '../../interfaces';
import { getRandomNum } from '../../utils';
import './Quotes.css';

const Quotes: FC = () => {
  const [quote, setQuote] = useState<string>('');
  const [author, setAuthor] = useState<string>('');

  const { isQuotesDisplayed } = useSelector((state: RootState) => state.display);

  async function changeQuotes() {
    const url: string = 'https://type.fit/api/quotes';
    const res: Response = await fetch(url);
    const data: QuotesI[] = await res.json();

    const index: number = getRandomNum(0, data.length - 1);

    setQuote(data[index].text);
    setAuthor(data[index].author);
  }

  function containerClassName(): string {
    const classes: string[] = ['quotes-container'];

    !isQuotesDisplayed && classes.push('hidden');

    return classes.join(' ');
  }

  useEffect(() => {
    changeQuotes();
  }, []);

  return (
    <div className={containerClassName()}>
      <button className='quotes-reload-icon' onClick={changeQuotes}></button>
      <p className='quote'>"{quote}"</p>
      <span>{author}</span>
    </div>
  );
}

export { Quotes };
