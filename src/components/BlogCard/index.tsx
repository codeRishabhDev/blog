import React from 'react';
import { Card, Title, Author, Date, Content, Image, ContantWrapper, UserWrapper, UserContainer } from './BlogStyle';

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
                <div>
                    {imageUrl && <Image src={imageUrl} alt={title} />}
                </div>
                <ContantWrapper>
                    <Title>{title}</Title>
                    <Date>Published on {date}</Date>
                    <Content>{content}</Content>
                    <UserContainer>
                        <UserWrapper>A</UserWrapper>
                        <Author>By {author}</Author>
                    </UserContainer>
                </ContantWrapper>

            </Card>
        </header>
    );
};

export default BlogCard;