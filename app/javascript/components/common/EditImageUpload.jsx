import React, { useCallback } from 'react';
import PropTypes from 'prop-types';
import withStyles from '@mui/styles/withStyles';
import { useDropzone } from 'react-dropzone';
import { enqueueSnackbar } from "notistack";
import classnames from 'classnames';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import ImageListItem from '@mui/material/ImageListItem';
import _isUndefined from 'lodash/isUndefined';
import CloudUploadOutlinedIcon from '@mui/icons-material/CloudUploadOutlined';
import ImageListItemBar from '@mui/material/ImageListItemBar';
import IconButton from '@mui/material/IconButton';
import ClearIcon from '@mui/icons-material/Clear';
import PushSnackbarMessage from './PushSnackbarMessage';
import {
  DARK_GREY_TEXT,
} from '../common/Constants';
import FileNameAndSize from './FileHandler'

const styles = () => ({
  textField: {
    width: '100%',
    padding: '0px 16px',
  },
  formRow: {
    padding: '16px 24px 0px 24px',
  },
  formQuestionTitle: {
    paddingBottom: '8px',
  },
  dropzoneField: {
    marginBottom:'8px',
  },
  dropzone: {
    flex: '1',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    padding: '8px 24px 24px 24px',
    borderWidth: '2px',
    borderRadius: '2px',
    borderColor: '#aaaaaa',
    borderStyle: 'dashed',
    backgroundColor: '#fafafa',
    color: DARK_GREY_TEXT,
    outline: 'none',
    transition: 'border .24s ease-in-out',
  },
  icon: {
    fontSize: '4rem',
  },
  dropzoneContent: {
    textAlign: 'center',
    alignItems: 'center',
  },
  dropzoneText: {
    fontSize: '0.9rem',
  },
  uploadedText: {
    margin: 0,
    color: 'green',
  },
  greyText: {
    color: 'rgba(0, 0, 0, 0.5)',
  },
});

const EditImageUpload = (props) => {
  const {
    classes,
    handleItemDataChange,
    submittingData,
  } = props;

  const { imageFile, imageUrl, imageRemoteUrl } = submittingData;
  const onDrop = useCallback((acceptedFiles) => {
    if (_isUndefined(acceptedFiles) || acceptedFiles.length === 0) {
      PushSnackbarMessage(
        enqueueSnackbar,
        'File uploaded must be in correct image format',
        'error',
      );
      handleChangeData(null, 'imageFile');
      return;
    }
    const pendingFile = acceptedFiles[0];
    if (pendingFile.size > 1000 * 1000) {
      PushSnackbarMessage(
        enqueueSnackbar,
        'File uploaded exceeds maximum file size. Please choose another file.',
        'error',
      );
    } else {
        handleItemDataChange(URL.createObjectURL(pendingFile), 'imageUrl');
        handleItemDataChange(pendingFile, 'imageFile');
    }
  }, []);

  const { getRootProps, getInputProps } = useDropzone({
    accept: 'image/*',
    onDrop,
  });

  const handleDeleteImage = () => {
    handleItemDataChange(null, 'imageUrl');
    handleItemDataChange(null, 'imageFile');
  };

  return (
    <Grid
      item
      container
      direction="column"
      className={classes.formRow}
      justifyContent="flex-start"
    >
      {(imageUrl) && (
        <Grid item>
          <Typography variant="h3" className={classes.formQuestionTitle}>Item Image</Typography>
        </Grid>
      )}
      {(imageUrl || imageRemoteUrl) ? (
        <Grid item>
          <ImageListItem  sx={{ width: 500, height: 450 }}>
            <img
              src={imageUrl || imageRemoteUrl}
              alt={imageFile ? imageFile.name : 'event image'}
              loading="lazy"
            />
            <ImageListItemBar
              title="delete image"
              position="top"
              actionIcon={(
                <IconButton
                  sx={{ color: 'white' }}
                  aria-label="delete image"
                  onClick={handleDeleteImage}
                >
                  <ClearIcon />
                </IconButton>
              )}
              actionPosition="left"
            />
          </ImageListItem>
        </Grid>
      ) : (
        <Grid item xs={12} className={classes.dropzoneField}>
          <div {...getRootProps()} className={classes.dropzone}>
            <input
              {...getInputProps()}
              multiple={false}
            />
            <Grid
              container
              direction="row"
              justifyContent="center"
              className={classes.dropzoneContent}
            >
              <Grid item xs={2}>
                <Grid container direction="column">
                  <Grid item xs={12}>
                    <CloudUploadOutlinedIcon className={classes.icon} />
                  </Grid>
                  <Grid item xs={12}>
                    <Typography className={classes.dropzoneText}>
                      Upload file
                    </Typography>
                  </Grid>
                </Grid>
              </Grid>
              <Grid item xs={10}>
                <Grid container direction="column" alignItems="center">
                  {
                    (imageFile && imageFile.size <= 1000 * 1000)
                      ? (
                        <Typography className={classes.uploadedText}>
                          {FileNameAndSize(imageFile)}
                        </Typography>
                      )
                      : (
                        <>
                          <Grid item xs={12}>
                            <Typography className={classes.dropzoneText}>
                              Drag and drop or choose a file to upload image
                            </Typography>
                          </Grid>
                          <Grid item xs={12}>
                            <Typography
                              classes={{
                                root: classnames(classes.dropzoneText, classes.greyText),
                              }}
                            >
                              (1MB limited. Recommended size: 600x600)
                            </Typography>
                          </Grid>
                        </>
                      )
                  }
                </Grid>
              </Grid>
            </Grid>
          </div>
        </Grid>
      )}
    </Grid>
  );
};

EditImageUpload.propTypes = {
  classes: PropTypes.instanceOf(Object).isRequired,
  handleItemDataChange: PropTypes.func.isRequired,
  submittingData: PropTypes.instanceOf(Object).isRequired,
};

export default withStyles(styles)(EditImageUpload);
