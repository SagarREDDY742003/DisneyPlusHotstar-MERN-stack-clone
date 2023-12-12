import React from 'react';
import Crousel from './Crousel';
import Action from './Types/Item';
import Drama from './Types/Drama';
import Crime from './Types/Crime';
import Romance from './Types/Romance';
import Science from './Types/Science';
import Biopic from './Types/Biopic';
import Adventure from './Types/Adventure';
import Comedy from './Types/Comedy';
import Mythology from './Types/Mythology';
import Kids from './Types/Kids';
import Superhero from './Types/Superhero';
import Fantasy from './Types/Fantasy';
import Genres from './Slides/Popular Genres';
import Languages from './Slides/PopularLanguages';
import Videoslide from './Slides/Videoslide';


function Home(){
    return(
        <>
           <Crousel/>
           <Action/>
           <Biopic />
           <Drama/>
           <Superhero/>
           <Science />
           <Crime />
           <Videoslide/>
           <Languages/>
           <Genres/>
           <Romance />
           <Adventure/>
           <Comedy />
           <Mythology/>
           <Kids/>
           <Fantasy/>
        </>
    )
}

export default Home;