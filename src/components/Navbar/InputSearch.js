import styled from "styled-components";
const Container = styled.div`
  display: flex;
  div {
    background-color: #f2f2f2;
  }
  input[type="text"] {
    padding: 0.3rem 0;
  }
`;
const InputSearch = () => {
  return (
    <Container>
      <div>
        <img
          src="https://icongr.am/fontawesome/search.svg?size=15&color=currentColor"
          alt="search"
        />
      </div>
      <input autocomplete="off" type="text" name="search" id="search" />
    </Container>
  );
};

export default InputSearch;
