import { FC, useEffect, useState } from 'react';
import { Header } from '../../components/Header/Header';
import { Main } from '../../components/Main/Main';
import { Footer } from '../../components/Footer/Footer';
import { getRandomNum } from '../../utils';
import './Wrapper.css';

const Wrapper: FC = () => {
  const [imageIndex, setImageIndex] = useState<number>(0);
  const [image, setImage] = useState<string>('');

  const setBackgroundImage = async (index: number): Promise<void> => {
    setImageIndex(index);

    const url: string = 'https://api.unsplash.com/topics/nature/photos/?client_id=_1v1WXZq78wnRP3y7ch8zNVSGmiSG0tuFcVIB81-1YE&per_page=20';
    const res: Response = await fetch(url);
    const data = await res.json();

    setImage(`${data[index].urls.raw}`);
  }

  useEffect(() => {
    const randomNum: number = +(getRandomNum(0, 19).toString().padStart(2, '0'));

    setBackgroundImage(randomNum);
  }, []);

  return (
    <div className='wrapper' style={{ backgroundImage: `url(${image})` }}>
      <Header />
      <Main imageIndex={imageIndex} setBackgroundImage={setBackgroundImage} />
      <Footer />
    </div>
  );
}

export { Wrapper };
