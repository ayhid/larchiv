import * as React from 'react';
import { format } from 'date-fns'
import { fr, arDZ as ar } from 'date-fns/locale'

import { RiVidiconLine as VideoIcon } from "react-icons/ri";
import { IArticle } from './interfaces';

interface IArticleCardProps extends IArticle {

}

const ArticleCard: React.FunctionComponent<IArticleCardProps> = ({ title, categories, language, video, publishDate }) => {

  const currentLocale = language === 'ar' ? ar : fr;

  console.log('language', language);
  console.log('currentLocale', currentLocale);

  const i18nPublishDate = format(publishDate, 'EEEE dd MMMM yyyy', { locale: currentLocale });

  return (
    
      <div className="px-10 my-4 py-6 rounded shadow-xl bg-white w-4/5 mx-auto" onClick={()=>{
        console.log('Article Clicked');
      }}>
        <div className="flex  flex-row-reverse justify-between items-center">
          <a className="px-3 py-1 bg-blue-600 text-gray-100 font-bold rounded hover:bg-gray-500" href="#">سياسة</a>
        </div>
        <div className="mt-2">
          <div className="flex flex-row">
            <div  >
              <VideoIcon size="3em" className="text-gray-300 mr-8" />
            </div>
            <div className="flex flex-col">
              <span className="text-2xl text-gray-700 font-bold hover:text-gray-600" href="#">
                {title}
              </span>
              <span className="font-light text-sm	 text-gray-600">{i18nPublishDate}</span>
              <p className="mt-2 text-gray-600">
                Ille enim occurrentia nescio quae comminiscebatur; Eadem nunc mea adversum te oratio est. Sit sane ista voluptas. Omnes enim iucundum motum, quo sensus hilaretur.
              </p>
            </div>
          </div>
        </div>
      </div >
    );
};

export default ArticleCard;
