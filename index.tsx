import React from 'react';
import withStyles, {StyledComponentProps} from "@material-ui/core/styles/withStyles";
import createStyles from "@material-ui/core/styles/createStyles";

const styles = createStyles({
    parent: {
        alignContent: 'center',
        alignItems: 'center',
        boxSizing: 'border-box',
        display: 'flex',
        flexDirection: 'row',
        flexWrap: 'nowrap',
        justifyContent: 'center',
        height: '100%'
    },
    window: {
        position: 'absolute', left: '50%', top: '50%',
        transform: 'translate(-50%, -50%)'
    },
    viewport: {
        position: 'fixed', left: '50%', top: '50%',
        transform: 'translate(-50%, -50%)'
    },
});


export enum CenterMode {
    Parent = 'parent',
    Window = 'window',
    Viewport = 'viewport',
}

interface IProps extends StyledComponentProps {
    children: React.ReactNode;
    mode?: CenterMode;
}

const Center = (props: IProps) => {
    const {mode = CenterMode.Parent, classes = {}, children} = props;
    return <div className={classes[mode]}>{children}</div>;
};

export default withStyles(styles)(Center);