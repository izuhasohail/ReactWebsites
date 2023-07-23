import React from 'react';
import {useOnlineStatus} from './useOnlineStatus'

export default function Main() {
    function StatusBar(){
        const isOnline=useOnlineStatus();
        return <h1>{isOnline?'✅ Online' : '❌ Disconnected'}</h1>
    }

    function SaveButton(){
        const isOnline=useOnlineStatus();

        function handleSaveClick(){
            console.log('✅ Progress saved');
        }

        return(
            <button disabled={!isOnline} onClick={handleSaveClick}>
                {isOnline?'Save Progess':'Reconnecting...'}
            </button>
        )
    }


  return (
    <>
    <SaveButton/>
    <StatusBar/>
    </>
  );
}
