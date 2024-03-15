import { DialogContent, DialogTitle, Button } from '@mui/material';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import SaveAltIcon from '@mui/icons-material/SaveAlt';
import CloseIcon from '@mui/icons-material/Close';

export const ACTION_TYPE = {
    YesNo: "YesNo",
    YesNoCancel: "YesNoCancel",
    Custom: "Custom",
    None:"None",
}

export default function CustomDialog({
    title,
    renderTitle,
    actionType,
    actions,
    onAction,
    children,
    open,
    handleClose,
}) {

    // default action
    const renderButtons = () => {
        switch (actionType) {
            case ACTION_TYPE.YesNo:
                return <>
                    <Button variant="outlined" startIcon={< SaveAltIcon />} type="submit">
                        Yes
                    </Button>
                    <Button variant="outlined" startIcon={< CloseIcon />} onClick={handleClose}>
                        No
                    </Button>
                </>
            case ACTION_TYPE.YesNoCancel:
                return <>
                    <Button variant="outlined" startIcon={< SaveAltIcon />} type="submit">
                        Yes
                    </Button>
                    <Button variant="outlined" startIcon={< CloseIcon />} onClick={handleClose}>
                        No
                    </Button>
                    <Button variant="outlined" startIcon={< CloseIcon />} onClick={handleClose}>
                        Cancel
                    </Button>
                </>
            default:
                return null;
        }
    };

    //If the action type is custom, you can render custom actions.
    const isCustomAction = actionType === ACTION_TYPE.Custom;
    const renderActions = () => {
        return actions.map((action, key) => {
            return <Button
                key={key}
                variant="outlined"
                startIcon={action.icon}
                sx={{ ...action?.sx }}
                onClick={() => onAction(action.type)}
            >
                {action.label}
            </Button>
        })
    };

    return (
        <>
            <Dialog
                open={open}
                onClose={handleClose}
            >
                {renderTitle
                    ? <DialogTitle>{renderTitle}</DialogTitle>
                    : <DialogTitle>{title}</DialogTitle>
                }

                <DialogContent>
                    {children}
                </DialogContent>

                <DialogActions>
                    {isCustomAction
                        ? renderActions()
                        : renderButtons()
                    }
                </DialogActions>
            </Dialog>
        </>
    )
};