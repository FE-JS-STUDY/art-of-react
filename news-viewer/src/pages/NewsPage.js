import { useParams } from 'react-router-dom';
import Categories from '../component/Categories';
import NewsList from '../component/NewsList';

const NewsPage = () => {
  const params = useParams();
  const category = params.category || 'all';

  return (
    <>
      <Categories />
      <NewsList category={category} />
    </>
  );
};

export default NewsPage;
