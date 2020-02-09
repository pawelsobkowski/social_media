import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

const StyledSection = styled.section`
    width: 100%;
    height: calc(100vh - 100px);
    padding: 10px 5px;
`;

const StyledH2 = styled.h2`
    margin: 0;
`;

const StyledForm = styled.form`
    width: 100%;
    min-height: 90%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
`;

const StyledTextarea = styled.textarea`
    width: 100%;
    resize: none;
    border: none;
    padding: 5px;
    font-size: 1.25em;
`;

const StyledButton = styled.button`
    width: 100px;
    padding: 10px;
    border: none;
    border-radius: 20px;
    color: #fff;
    background-color: #000;
    font-size: 1.1em;
`;

const NewPost = () => {
    return (
        <StyledSection>
            <StyledH2>Create post</StyledH2>
            <StyledForm>
                <StyledTextarea
                    placeholder="Write something..."
                    rows="20"
                ></StyledTextarea>
                <StyledButton type="submit">Post</StyledButton>
            </StyledForm>
        </StyledSection>
    );
};

export default NewPost;
