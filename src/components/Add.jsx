import { Avatar, Box, Button, ButtonGroup, Fab, Modal, Stack, TextField, Tooltip, Typography } from '@mui/material'
import React, { useState } from 'react'
import {Add as AddIcon, DateRange, EmojiEmotions, Image, PersonAdd, VideoCameraBack} from "@mui/icons-material"
import styled from '@emotion/styled'


const Add = () => {
    const [open, setOpen] = useState(false)
    const StyledModal = styled(Modal)({
        display:"flex",
        alignItems:"center",
        justifyContent:"center"
    })
    const UserBOX = styled(Box)({
        display:"flex",
        alignItems:"center",
        gap:"10px",
        marginBottom:"20px"
    })
    return (
        <>
        <Tooltip onClick={e=>setOpen(true)} 
        title="Delete" sx={{position:"fixed", bottom:20, left:{xs:"calc(50% - 25px)",md:30}}}>
            <Fab color="primary" aria-label="add">
                <AddIcon/>
            </Fab>
        </Tooltip>
        <StyledModal
            open={open}
            onClose={e=>setOpen(false)}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
            >
            <Box width={400} height={280} bgcolor={"background.default"} color={"text.primary"} p={3} borderRadius={5} >
                <Typography variant="h6" color="gray" textAlign="center">
                    Create Post
                </Typography>
                <UserBOX>
                    <Avatar sx={{width:30,height:30}} src='./src/components/2022_11_27 8_45 AM Office Lens (3).jpg'/>
                    <Typography fontWeight={500} variant="span">Ram</Typography>
                </UserBOX>
                <TextField
                    sx={{width:"100%"}}
                    id="standard-multiline-static"
                    multiline
                    rows={3}
                    placeholder="What's On your mind?"
                    variant="standard"
                />
                <Stack direction="row" gap={1} mt={2} mb={3}>
                    <EmojiEmotions color="primary"/>
                    <Image color="secondary" />
                    <VideoCameraBack color="success" />
                    <PersonAdd color="error" />
                </Stack>
                <ButtonGroup fullWidth
                variant="contained" aria-label="outlined primary button group">
                    <Button>Post</Button>
                    <Button sx={{width:"100px"}} ><DateRange/></Button>
                </ButtonGroup>
            </Box>
        </StyledModal>
        </>
    )
}

export default Add