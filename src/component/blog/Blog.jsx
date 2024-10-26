import PropTypes from 'prop-types';
import { FaBookmark } from 'react-icons/fa';

const Blog = ({blog,handleAddBookmark,handleReadingTime}) => {
    const {id,title,cover_image,author,author_image,reading_time,posted_date,hashtags} = blog;
    return (
        <div className='mb-20 space-y-5'>
            <img className='w-full mb-8' src={cover_image} alt={`Cover image of the title ${title}`} />
            <div className='flex justify-between items-center mb-8'>
                <div className='flex items-center gap-5'>
                    <img className='w-16' src={author_image} alt="" />
                    <div>
                        <h3 className='text-2xl'>{author}</h3>
                        <p className='text-xl'>{posted_date}</p>
                    </div>
                </div>
                <div className='flex items-center'>
                    <span className='text-xl'>{reading_time} min read</span>
                    <button onClick={()=>handleAddBookmark(blog)} className='ml-2 text-2xl'><FaBookmark></FaBookmark></button>
                </div>
            </div>
            <h1 className='text-3xl mb-8'>{title}</h1>
            <p>
                {
                    hashtags.map((hash,idx) => <span key={idx}>#{hash}</span>)
                }
            </p>
            <button onClick={()=>handleReadingTime(id,reading_time)} className='text-purple-600 font-bold underline'>Mark As Read</button>
        </div>
    );
};

Blog.propTypes ={
    blog: PropTypes.object.isRequired,
    handleAddBookmark: PropTypes.func,
    handleReadingTime: PropTypes.func
}
export default Blog;