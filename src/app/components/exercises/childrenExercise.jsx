import React from "react";
import CollapseWrapper from "../common/collapse";
import PropTypes from "prop-types";
const ChildrenExercise = () => {
    return (
        <CollapseWrapper title="Упражнение">
            <p className="mt-3">
                У вас есть компоненты Списка. Вам необходимо к каждому из них
                добавить порядковый номер, относительно того, как они
                располагаются на странице. Вы можете использовать как{" "}
                <code>React.Children.map</code> так и{" "}
                <code>React.Children.toArray</code>
            </p>
            <MainComponent>
                <Component />
                <Component />
                <Component />
            </MainComponent>
        </CollapseWrapper>
    );
};

const Component = ({ num }) => {
    return <div>{num} Компонент списка</div>;
};

const MainComponent = ({ children }) => {
    const arr = React.Children.toArray(children);
    return React.Children.map(arr, (child) => {
        const config = {
            ...child.props,
            num: child.key
        };
        return React.cloneElement(child, config);
    });
};
MainComponent.propTypes = {
    children: PropTypes.oneOfType([
        PropTypes.arrayOf(PropTypes.node),
        PropTypes.node
    ])
};
Component.propTypes = {
    num: PropTypes.string
};

export default ChildrenExercise;
