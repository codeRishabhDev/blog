import React from 'react';
import BlogCard from '../components/BlogCard';

const Home: React.FC = () => {
  return (
  
      <div className="card-wrapper">
        <BlogCard
          title="Sample Blog Post"
          author="John Doe"
          date="October 31, 2023"
          content="This is a sample blog post content. You can replace it with your own content."
          imageUrl="https://media.istockphoto.com/id/1403976345/photo/good-looking-teenage-asian-man-with-laugh-isolate-on-yellow-background.jpg?s=1024x1024&w=is&k=20&c=XGOggQVvBLzz-NbiR3QWTjpjf0PvQ4HbJKyPQ0SENaI=" />

        <BlogCard
          title="Sample Blog Post"
          author="John Doe"
          date="October 31, 2023"
          content="This is a sample blog post content. You can replace it with your own content."
          imageUrl="https://img.freepik.com/free-vector/hand-drawn-food-background_52683-2954.jpg?w=740&t=st=1698760848~exp=1698761448~hmac=3eb475b97616f08c5bf705b96bfba38a2a9bcb26e4aa7c634f5972248e20db34" />
      
    </div >
     
  );
};

export default Home;