const TestLayout=({children,}:{ children: React.ReactNode; })=>{
    return (<div className="h-full">
        <div>This is nav bar</div>
        <hr />
        {children}
        </div>);
}

export default TestLayout;