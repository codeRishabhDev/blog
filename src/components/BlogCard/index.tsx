import React from 'react';
import { Card, Title, Author, Date, Content, Image } from './BlogStyle';

interface BlogCardProps {
    title: string;
    author: string;
    date: string;
    content: string;
    imageUrl: string;

}
const BlogCard: React.FC<BlogCardProps> = ({ title, author, date, content, imageUrl }) => {
    return (
        <header>
            <Card>
                {imageUrl && <Image src={imageUrl} alt={title} />}
                <Title>{title}</Title>
                <Author>By {author}</Author>
                <Date>Published on {date}</Date>
                <Content>{content}</Content>

            </Card>
        </header>
    );
};

export default BlogCard;