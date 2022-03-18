import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Avatar,
  Box,
  Container,
  Divider,
  List,
  ListItem,
  ListItemAvatar,
  ListItemText,
  Typography,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import React from "react";
import "./ChatReview.css";

const ChatReview = ({ question }) => {
  return (
    <Box className="chat">
      <Accordion className="chat-accordion">
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography
            gutterBottom
            variant="h6"
            component="div"
            color="text.secondary"
          >
            {question.question}
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <List sx={{ width: "100%", bgcolor: "background.paper" }}>
            {question.answers.map((answer, index) => (
              <Container key={index}>
                <ListItem alignItems="flex-start">
                  <ListItemAvatar>
                    <Avatar alt={answer.respondent} src="No avatar" />
                  </ListItemAvatar>
                  <ListItemText
                    primary={`${answer.respondent} commented`}
                    secondary={<React.Fragment>{answer.answer}</React.Fragment>}
                  />
                </ListItem>
                <Divider variant="inset" component="li" />
              </Container>
            ))}
          </List>
        </AccordionDetails>
      </Accordion>
    </Box>
  );
};

export default ChatReview;
