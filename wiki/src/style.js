import { createGlobalStyle} from 'styled-components';

export default createGlobalStyle`
    *, body {
        margin: 0;
        padding: 0;
    }

    body {
        background-color: #000000;
        color: #FFFFFF;
    }

    img {
        width: 80px;
        heigth: 40vh;
    }
`