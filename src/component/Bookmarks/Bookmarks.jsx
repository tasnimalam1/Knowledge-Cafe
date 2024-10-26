import PropTypes from 'prop-types';
import Bookmark from '../Bookmark/Bookmark';

const Bookmarks = ({bookmarks,readingTime}) => {
    return (
        <div className="md:w-1/3 bg-gray-200 m-4 p-4">
            <div>
                <h1 className='text-3xl'>Reading Time: {readingTime}</h1>
            </div>
            <h2 className="text-3xl m-4 p-4">Bookmarked Blogs:{bookmarks.length}</h2>
            {
                bookmarks.map((bookmark,idx) => <Bookmark key={idx} bookmark={bookmark}></Bookmark>)
            }
        </div>
    );
};
Bookmarks.propTypes={
    bookmarks: PropTypes.array,
    readingTime: PropTypes.number
}

export default Bookmarks;