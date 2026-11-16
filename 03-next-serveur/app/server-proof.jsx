"use client";
import { useState } from 'react';
export default function ServerProof(){
 const [result,setResult]=useState('Aucune requête envoyée.');
 const [busy,setBusy]=useState(false);
 async function check(){setBusy(true);try{const res=await fetch('/api/preuve',{cache:'no-store'});if(!res.ok)throw new Error('Réponse serveur indisponible');const data=await res.json();setResult(`Heure serveur : ${data.generatedAt} | Requête : ${data.requestId}`);}catch{setResult('Impossible de joindre le serveur. Réessaie.');}finally{setBusy(false);}}
 return <><button onClick={check} disabled={busy}>{busy?'Interrogation…':'Interroger le serveur'}</button><output aria-live="polite">{result}</output></>;
}
