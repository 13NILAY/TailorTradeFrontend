
import { createTheme } from '@mui/material/styles';


const fontcolorTheme = createTheme({
    palette:{
        greeen:{
            main: '#00B69B' //green
        },
        blue:{
            main:'#C3E0EA' //light blue
        }
        
    },
    typography: {
        fontFamily: [
            'Montserrat',
            'Roboto',
            '"Segoe UI"',
            'Arial',
            'sans-serif',
        ].join(','),
        mono: "Menlo, monospace",
    },
});

export default fontcolorTheme;