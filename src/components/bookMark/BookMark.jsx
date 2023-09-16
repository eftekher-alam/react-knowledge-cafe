import { PropTypes } from 'prop-types';

const BookMark = ({ bookMark }) => {
    console.log(bookMark);
    return (
        <div>
            <div className='bg-gray-100 rounded-lg p-4'>
                <h1 className='text-lg font-bold'>Bookmarked blogs : {bookMark.length}</h1>
                {
                    bookMark.map(title => <div className='bg-white rounded-lg font-bold p-3 my-3' key={title}>{title}</div>)
                }
            </div>
        </div>
    );
};

BookMark.propTypes = {
    bookMark: PropTypes.array
}
export default BookMark;