// simulate the cheese database
const cheeses = [
  { id: 1,
    name: 'Barlocco',
    price: 13, 
    color: 'Blue', 
    description:"Barlocco is a strong and creamy blue cheese, made from pasteurised cow's milk by The Ethical Dairy, Rainton in Scotland. Named after Barlocco Island, a small rocky isle off the coast near the far where it is produced. The cheese features fine veining that imparts a smooth and consistent flavor throughout." , 
    imageUrl: 'https://pzcheeses.s3.ap-southeast-2.amazonaws.com/barlocco.jpg' 
  },
  { id: 2, 
    name: 'Dorset Red', 
    price: 25, 
    color: 'Red', 
    description:"Dorset Red, produced by Ford Farm in Dorset, England, is a tangy cheese made using locally sourced cow's milk. The cheese is matured for around three months. This hand-made cheese has a deep amber color from annatto, it has a mild flavor and soft texture. Cold-smoked over oak chips, it boasts a distinctive, mellow, smoky flavor." , 
    imageUrl: 'https://pzcheeses.s3.ap-southeast-2.amazonaws.com/dorset.jpg' 
  },
  { id: 3, 
    name: 'Anari', 
    price: 18, 
    color: 'White', 
    description:"Anari is a fresh ricotta style soft, mild whey cheese, made from goat or sheep's milk. In Cyprus, Anari is among the lesser-known cheeses but has started growing its popularity after public exposure.  In Greece, similar cheese is known as Mizithra or Myzithra." , 
    imageUrl: 'https://pzcheeses.s3.ap-southeast-2.amazonaws.com/anari.jpg' 
  },
  { id: 4, 
    name: 'Herve', 
    price: 30, 
    color: 'Orange', 
    description:"Herve is usually shaped into a brick when sold. Since it is fully flavored, it is traditionally served with dark bread, a slice of onion, and beer. It is one of the most popular cheeses in Belgium, known for its strong aroma." , 
    imageUrl: 'https://pzcheeses.s3.ap-southeast-2.amazonaws.com/herve.jpg' 
  },
  { id: 5, 
    name: 'Sage Derby', 
    price: 22, 
    color: 'Green', 
    description:"It is a semi-hard, delicate cheese with a mild sage flavour and is well known for its versatility. Its natural rind is often dusted with sage. Due to the bright markings, the cheese looks very striking on a cheeseboard. " , 
    imageUrl: 'https://pzcheeses.s3.ap-southeast-2.amazonaws.com/sage+derby.jpg' 
  }
]

module.exports = { cheeses };