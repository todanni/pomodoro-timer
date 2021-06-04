import {makeStyles} from "@material-ui/core/styles";

export default makeStyles((theme) => ({
    session: {
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        marginTop: '30px',
        justifyContent: 'space-between'
    },
    field: {
        margin: "10px",
    },
    actionControls: {
        margin: "20px",
    },
    actionButton: {
        fontSize: "14px",
        padding: "10px",
        width: "100px"
    }
}));