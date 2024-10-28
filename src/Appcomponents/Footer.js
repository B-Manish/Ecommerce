// import React from 'react'
// import Container from '@mui/material/Container';
// import Box from '@mui/material/Box';

// const Footer=()=>{
//   return (
//     <div>
//       <Container fixed>
//         <Box sx={{ bgcolor: 'black', height: '10vh',width:'98.87vw',marginLeft:'-5%',color:'white',textAlign:'center',marginTop:'2%' }} >
//             <div sx={{margin:'100px 0 0 0'}}>Copyright &copy;Ecommerce Shop 2022.All rights reserved.</div>
//         </Box>
//       </Container>
//     </div>
//   )
// }

// export default Footer










import * as React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Link from '@mui/material/Link';

function Copyright() {
  return (
    <Typography variant="body2" color="text.secondary" sx={{ marginLeft: '60px' }}>
      {'Copyright © Ecommerce Shop 2022.All rights reserved.'}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

// position:absolute; left:0; bottom:0; right:0;
export default function Footer() {
  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', minHeight: '11vh',marginTop:'120px'}}>
      <CssBaseline />
      <Box component="footer" sx={{ py: 3, px: 2, mt: 'auto', backgroundColor: (theme) => theme.palette.mode === 'light' ? theme.palette.grey[200] : theme.palette.grey[800] }}>
        <Container maxWidth="sm">
          <Copyright />
        </Container>
      </Box>
    </Box>
  );
}
