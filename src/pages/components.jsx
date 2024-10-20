import React from 'react'
import Parent from '../components/parent';
import Style from '../components/styling';
import FunctionalState from '../components/state-in-functionalCom'
import ClassState from '../components/state-in-classCom';
import ScooterFunc from '../components/MultipleState-in-FunCom';
import ClassScooterFunc from '../components/MultipleState-in-ClsCom';
import StateList from '../components/State-in-array';
import EffectFunc from '../components/useEffect';

export default function Components() {
    return (

        <div className='App'>

            <Parent />
            <Style />
            <FunctionalState />
            <ClassState />
            <ScooterFunc />
            <ClassScooterFunc />
            <StateList />
            <EffectFunc />
            
        </div>
    )
}
