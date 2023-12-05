import React from "react";
import withStyles from '@mui/styles/withStyles';
import { useLocation } from 'react-router';
import { useNavigate } from 'react-router-dom';
import qs from 'qs';
import PropTypes from 'prop-types';
import SearchIcon from '@mui/icons-material/Search';
import InputBase from '@mui/material/InputBase';
import { TABLE_ROW_CAPTION_COLOR, SEARCH_BACKGROUND_COLOR } from "./Constants";

const styles = () => ({
    search: {
        border: `1px solid ${TABLE_ROW_CAPTION_COLOR}`,
        position: 'relative',
        marginLeft: "20px",
        marginRight: '8px',
        borderRadius: "8px",
        backgroundColor: TABLE_ROW_CAPTION_COLOR,
        width: 'auto',
      },
      searchIcon: {
        padding: '0 16px',
        height: '100%',
        position: 'absolute',
        pointerEvents: 'none',
        display: 'flex',
        alignItems: 'center',
        color: '#171a1f',
        justifyContent: 'center',
      },
      inputRoot: {
        color: '#171a1f',
        width: '100%',
      },
      inputInput: {
        padding: "8px 8px 8px 0px",
        paddingLeft: `calc(1em + 32px)`,
        width: '100%',
      },
})

const SearchBar = (props) => {
    const { classes, placeholder } = props;
    const location = useLocation();
    const navigate = useNavigate();
    const params = qs.parse(location.search, { ignoreQueryPrefix: true });
    const { search } = params;
    const updateParamsUrl = parameters => {
        const newPath = [
            location.pathname,
            Object.keys(parameters).map(k => `${k}=${parameters[k]}`).join('&'),
        ].join('?');
        window.location.href = newPath;
    }   
    const handleChangeSearch = (e) => {
        const { value } = e.target;
        if (e.keyCode === 13 && value !== search) {
        const updatedParams = { ...params, search: value };
        updateParamsUrl(updatedParams);
        }
    };

    return (
        <div className={classes.search}>
            <div className={classes.searchIcon}>
                <SearchIcon />
            </div>
                <InputBase
                    placeholder={placeholder}
                    classes={{
                        root: classes.inputRoot,
                        input: classes.inputInput,
                    }}
                    onKeyDown={handleChangeSearch}
                    defaultValue={search || ''}
                    inputProps={{ 'aria-label': 'search' }}
            />
        </div>
    )
}

SearchBar.propTypes = {
    classes: PropTypes.instanceOf(Object).isRequired,
    placeholder: PropTypes.string.isRequired,
};

export default withStyles(styles)(SearchBar);
