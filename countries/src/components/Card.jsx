import styled from "styled-components";

const Wrapper = styled.article`
    border-radius: var(--radius);
    box-shadow: var(--shadow);
    cursor: pointer;
    background-color: var(--colors-bg);
    overflow: hidden;
`;

const CardImage = styled.img`
    display: block;
    width: 100%;
    height: 150px;
    object-fit: cover;
    object-position: center;
    box-shadow: var(--shadow)
`;

const CardBody = styled.div``;

const CardTitle = styled.h3``;

const CardList = styled.ul``;

const CardListItem = styled.li``;


const Card = ({ img, name, info = [], onClick }) => {
    console.log(img)
    return (
        <Wrapper onClick={onClick}>
            <CardImage  src={img} alt='#'/>
            <CardBody>
                <CardTitle>
                    {name}
                </CardTitle>
                <CardList>
                    {info.map(el => (
                        <CardListItem  key={el.title}>
                            <b>{el.title}:</b> {el.description}
                        </CardListItem>
                    ))}
                </CardList>
            </CardBody>
        </Wrapper>
    );
}

export default Card;