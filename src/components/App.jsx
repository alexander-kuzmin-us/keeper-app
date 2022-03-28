import React from 'react';
import Footer from './Footer';
import Header from './Header';
import Note from './Note';

function App() {
    return <div>
        <Header />
        <Note title="Note Title" content="Note Content" />
        <Footer />
    </div>
}

export default App;