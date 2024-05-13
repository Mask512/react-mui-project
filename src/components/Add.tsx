import {
  AddBox,
  DateRange,
  EmojiEmotions,
  Image,
  PersonAdd,
  VideoCameraBack,
} from '@mui/icons-material';
import {
  Avatar,
  Box,
  Button,
  ButtonGroup,
  Fab,
  Modal,
  Stack,
  styled,
  TextField,
  Tooltip,
  Typography,
} from '@mui/material';
import { useState } from 'react';

const StyledModal = styled(Modal)({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
});

const UserBox = styled(Box)({
  display: 'flex',
  alignItems: 'center',
  gap: '10px',
  marginBottom: '20px',
});

export const Add = () => {
  const [open, setOpen] = useState(false);

  return (
    <>
      <Tooltip
        title="Delete"
        sx={{
          position: 'fixed',
          bottom: 20,
          right: {
            xs: 'calc(50% - 25px)',
            sm: 30,
          },
        }}
        onClick={() => setOpen(true)}
      >
        <Fab color="primary" aria-label="add">
          <AddBox />
        </Fab>
      </Tooltip>
      <StyledModal
        open={open}
        onClose={() => setOpen(false)}
        aria-labelledby="child-modal-title"
        aria-describedby="child-modal-description"
      >
        <Box width={400} height={320} p={3} borderRadius="5px" bgcolor='background.default' color='text.primary'>
          <Typography
            id="modal-title"
            variant="h6"
            color="gray"
            textAlign="center"
          >
            Create Post
          </Typography>
          <UserBox>
            <Avatar sx={{ width: 30, height: 30 }}>JD</Avatar>
            <Typography fontWeight={500}>John Doe</Typography>
          </UserBox>
          <TextField
            multiline
            rows={4}
            placeholder="What's on your mind"
            variant="standard"
            fullWidth
          />
          <Stack direction="row" gap={1} mt={2}>
            <EmojiEmotions color="primary" />
            <Image color="primary" />
            <VideoCameraBack color="primary" />
            <PersonAdd color="success" />
          </Stack>
          <ButtonGroup variant="contained" fullWidth sx={{marginTop: '10px'}}>
            <Button>Post</Button>
            <Button sx={{width: '100px'}}>
              <DateRange />
            </Button>
          </ButtonGroup>
        </Box>
      </StyledModal>
    </>
  );
};
