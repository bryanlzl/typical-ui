//* APP: root react component
const App = (): JSX.Element => {
    return (
        <div data-theme="light" className="flex h-full w-full">
            <span className="border-suc-50 mx-[4rem] my-[4rem] border">
                <p className="text-[var(--color-primary)] shadow-[var(--elevation-1)]">Awesome, this app runs now!</p>
            </span>
        </div>
    );
};

export default App;
