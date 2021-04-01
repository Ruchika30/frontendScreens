
import React, { useState } from 'react';
// import InputComponent from '../components/input';
import { Button, TextField, TextareaAutosize } from '@material-ui/core';
// import TextareaAutosize from '@material-ui/core/TextareaAutosize';
import { makeStyles } from '@material-ui/core/styles';
import LoaderProvider from '../hooks/use-loader';
import { sendBlogContent } from '../services/careers';

const ContentPage = () => {
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');
  const [category, setCategory] = useState('');
  const [categoryDesc, setcategoryDesc] = useState('');
  const [description, setDescription] = useState('');
  const [minutes, setminutes] = useState('');
  const [listId, setlistId] = useState('');
  const { show, hide } = LoaderProvider();
  const [content, setcontent] = useState('');
  // const [dataArray, setdataArray] = useState([]);
  const dataArray = [];
  const useStyles = makeStyles(theme => ({
    root: {
      '& > *': {
        margin: theme.spacing(1),
        width: '25ch'
      }
    }
  }));

  const sendBlogData = async () => {
    try {
      show();

      const data = {
        title,
        author,
        // content: JSON.stringify(content),
        content,
        category,
        description,
        minutes
      };
      const dataArrayValue = dataArray.push(data);
      const params = {
        career_list_id: listId,
        categoryName: category,
        categoryDec: categoryDesc

      };
      params.blog_posts = dataArray;
      const response = await sendBlogContent(params);
      // debugger;
      // const { responsibility_list } = response;
      // setResponsibilities(responsibility_list);
      hide();
    } catch (error) {
      // setErrorFlag(true);
      // handleError(error, setError, '/returnb2c', [getOrderRefundDataB2cService]);
      hide();
    }
  };

  const handleTitle = evt => {
    setTitle(evt.target.value);
  };
  const handleAuthor = evt => {
    setAuthor(evt.target.value);
  };

  const handlecategory = evt => {
    setCategory(evt.target.value);
  };

  const handledescription = evt => {
    setDescription(evt.target.value);
  };

  const handleminutes = evt => {
    setminutes(evt.target.value);
  };
  const handleContent = evt => {
    setcontent(evt.target.value);
  };

  const handleListId = evt => {
    setlistId(evt.target.value);
  };

  const handlecategoryDescription = evt => {
    setcategoryDesc(evt.target.value);
  };

  const classes = useStyles();

  return (
    <div>
      <h1>Add blog content</h1>
      <form className={classes.root} noValidate autoComplete="off">
        <TextField id="standard-basic" label="career list id" onChange={handleListId} value={listId} />
        <br />
        <TextField id="standard-basic" label="title" onChange={handleTitle} value={title} />
        <br />
        <TextareaAutosize aria-label="minimum height" rowsMin={3} placeholder="Minimum 3 rows" label="content" onChange={handleContent} />
        <br />
        <TextField id="standard-basic" label="author" onChange={handleAuthor} value={author} />
        <br />
        <TextField id="standard-basic" label="category" onChange={handlecategory} value={category} />
        <br />
        <TextField id="standard-basic" label="category Description" onChange={handlecategoryDescription} value={categoryDesc} />
        <br />
        <TextField id="standard-basic" label="description" onChange={handledescription} value={description} />
        <br />
        <TextField id="standard-basic" label="minutes" type="number" onChange={handleminutes} value={minutes} />
        <br />
        <Button variant="contained" color="secondary" onClick={sendBlogData}>
          Submit
        </Button>
        <div className="App">
          {/* <ReactMarkdown source={markdown} /> */}
        </div>
      </form>
    </div>

  );
};

export default ContentPage;

