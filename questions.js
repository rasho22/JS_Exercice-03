

function CreationTableauLangages(){
	var langages=["Html","CSS","Java","PHP"];
	return langages;

};
function CreationTableauNombres(){
	var tab = [0,1,2,3,4,5];
	return tab;
};

function RemplacementElement(langages){
	langages.splice(2,4,"Javascript","PHP");
	return langages;
};

function AjoutElementLangages (langages){
	var tab2=["Ruby", "Python"];
	return langages.concat(tab2);

};
function AjoutElementNombres(tab){
	var tab3=[-2,-1];
	return tab.unshift(tab3);
};
function AjoutElementNombres(nombres){
	nombres.unshift(-2,-1);
	return nombres;
};
function SuppressionPremierElement(langages){
	langages.shift();
	return langages;
};
function SuppressionDernierElement(langages){
	langages.pop();
	return langages;
};
function ConversionChaineTableau(reseaux_sociaux_chaine){
	var reseaux_sociaux=reseaux_sociaux_chaine.split(",");
	return reseaux_sociaux;
};

function  ConversionTableauChaine(langages){
	return langages.toString();
};
function TriTableau(reseaux_sociaux){
	return reseaux_sociaux.sort();
};
function InversionTableau(langages){
	return langages.reverse();
};

function TriSpecial(langages){
	return langages.sort(function(a,b){
		return(a.length-b.length);
	});
	
};


