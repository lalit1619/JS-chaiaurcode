//object destructring

const band=
{
    bandName: "John and the locals",
    songName: "Sadhana",
    year : 2079,
    anotherFamousSong: "Hawa jastai",
};
const bandName = band.bandName;
const songName=band.songName;
console.log(bandName,"->",songName);

const{bandName:bandName2,songName:songName2,...restprops}=band;
console.log(bandName2,"->",songName2);
console.log(restprops);