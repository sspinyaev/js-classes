function noProto(){
	const emptyObject = Object.create(null);
	return emptyObject
}

noProto()