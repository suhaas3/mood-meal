
import * as React from 'react';
const Login = React.lazy(() => import('../Login/Login'))
const Dialog = React.lazy(() => import('@mui/material/Dialog'))

export default function LoginPopup({openLogin,setOpenLogin}) {
  const [open, setOpen] = React.useState(openLogin);


  const handleClose = () => {
    setOpen(false);
  };

  return (
    <React.Fragment>
      <Dialog
        open={openLogin}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <Login setOpenLogin={setOpenLogin}/>
      </Dialog>
    </React.Fragment>
  );
}
