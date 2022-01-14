import * as React from 'react';
import ArticleCard from './ArticleCard';
import { IArticle } from './interfaces';

interface IArticleListProps {
  articles: [IArticle]
}

const ArticleList: React.FunctionComponent<IArticleListProps> = ({articles}) => {
  return (
  <ul>
    <li>
      {articles.map(article=>{
        return <ArticleCard key={article.id} {...article} />
      })}
      
    </li>
  </ul>
    ) ;
};

export default ArticleList;
