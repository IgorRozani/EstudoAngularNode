var fs = require('fs');

module.exports.getAll = function (req, res){
    var results = [
  {
    "codigo": 1,
    "nome": "Melba Jacobson",
    "dataNascimento": "2012-03-15T03:27:58+03:00"
  },
  {
    "codigo": 2,
    "nome": "Walton Wynn",
    "dataNascimento": "2008-05-09T05:34:55+03:00"
  },
  {
    "codigo": 3,
    "nome": "Latasha Tucker",
    "dataNascimento": "1993-08-14T04:55:18+03:00"
  },
  {
    "codigo": 4,
    "nome": "Herring Roy",
    "dataNascimento": "1988-05-11T09:26:45+03:00"
  },
  {
    "codigo": 5,
    "nome": "Chris Sharpe",
    "dataNascimento": "2013-10-20T06:06:31+02:00"
  },
  {
    "codigo": 6,
    "nome": "Rose Dillard",
    "dataNascimento": "2008-05-12T08:25:27+03:00"
  },
  {
    "codigo": 7,
    "nome": "Chelsea Ortiz",
    "dataNascimento": "1993-04-14T03:52:25+03:00"
  },
  {
    "codigo": 8,
    "nome": "Ramirez Roman",
    "dataNascimento": "1993-10-31T02:56:37+02:00"
  },
  {
    "codigo": 9,
    "nome": "Tommie Macias",
    "dataNascimento": "2009-12-18T10:32:02+02:00"
  },
  {
    "codigo": 10,
    "nome": "Jimmie Camacho",
    "dataNascimento": "1994-12-22T03:24:07+02:00"
  },
  {
    "codigo": 11,
    "nome": "Lyons Glass",
    "dataNascimento": "2015-11-08T11:53:53+02:00"
  },
  {
    "codigo": 12,
    "nome": "Clarissa Simmons",
    "dataNascimento": "1989-09-26T01:54:13+03:00"
  },
  {
    "codigo": 13,
    "nome": "Bauer Manning",
    "dataNascimento": "2015-04-10T11:26:51+03:00"
  },
  {
    "codigo": 14,
    "nome": "Sheila Fulton",
    "dataNascimento": "2001-03-06T08:30:32+03:00"
  },
  {
    "codigo": 15,
    "nome": "Garrison Boyle",
    "dataNascimento": "2006-09-29T09:05:06+03:00"
  },
  {
    "codigo": 16,
    "nome": "Logan Delgado",
    "dataNascimento": "1997-11-01T05:07:05+02:00"
  },
  {
    "codigo": 17,
    "nome": "Schwartz Pennington",
    "dataNascimento": "2011-05-14T10:26:05+03:00"
  },
  {
    "codigo": 18,
    "nome": "Hopper Strickland",
    "dataNascimento": "1992-02-29T08:15:44+03:00"
  },
  {
    "codigo": 19,
    "nome": "Concetta Beard",
    "dataNascimento": "2003-03-17T08:19:35+03:00"
  },
  {
    "codigo": 20,
    "nome": "Joanne Guerra",
    "dataNascimento": "2009-08-06T11:16:03+03:00"
  },
  {
    "codigo": 21,
    "nome": "Shaffer Haynes",
    "dataNascimento": "2007-08-11T06:58:53+03:00"
  },
  {
    "codigo": 22,
    "nome": "Higgins Willis",
    "dataNascimento": "1996-02-23T03:29:19+03:00"
  },
  {
    "codigo": 23,
    "nome": "Riggs Berger",
    "dataNascimento": "2004-11-18T01:20:37+02:00"
  },
  {
    "codigo": 24,
    "nome": "Erna Carroll",
    "dataNascimento": "2006-12-18T01:02:54+02:00"
  },
  {
    "codigo": 25,
    "nome": "Short Dean",
    "dataNascimento": "2009-10-15T09:00:58+03:00"
  },
  {
    "codigo": 26,
    "nome": "Pitts Booker",
    "dataNascimento": "2005-09-22T04:08:01+03:00"
  },
  {
    "codigo": 27,
    "nome": "Alexandra Ross",
    "dataNascimento": "2007-04-19T10:06:31+03:00"
  },
  {
    "codigo": 28,
    "nome": "Conley Green",
    "dataNascimento": "2008-08-25T09:29:17+03:00"
  },
  {
    "codigo": 29,
    "nome": "Sanford Santos",
    "dataNascimento": "1993-07-09T09:49:58+03:00"
  },
  {
    "codigo": 30,
    "nome": "Ochoa Stafford",
    "dataNascimento": "1991-08-03T06:10:05+03:00"
  },
  {
    "codigo": 31,
    "nome": "Diane Gray",
    "dataNascimento": "2010-05-20T12:58:49+03:00"
  },
  {
    "codigo": 32,
    "nome": "Alyssa Pitts",
    "dataNascimento": "2003-11-11T08:40:51+02:00"
  },
  {
    "codigo": 33,
    "nome": "Becker Dawson",
    "dataNascimento": "2014-06-22T07:55:06+03:00"
  },
  {
    "codigo": 34,
    "nome": "Tracy Newton",
    "dataNascimento": "2005-06-30T08:22:35+03:00"
  },
  {
    "codigo": 35,
    "nome": "Keisha Hatfield",
    "dataNascimento": "1998-04-25T02:28:38+03:00"
  },
  {
    "codigo": 36,
    "nome": "Delaney Knox",
    "dataNascimento": "2007-10-13T04:43:06+03:00"
  },
  {
    "codigo": 37,
    "nome": "Morin Key",
    "dataNascimento": "2016-04-19T02:19:22+03:00"
  },
  {
    "codigo": 38,
    "nome": "Erika Garza",
    "dataNascimento": "1997-03-24T07:49:57+03:00"
  },
  {
    "codigo": 39,
    "nome": "Jacquelyn Leon",
    "dataNascimento": "1994-09-21T09:21:36+03:00"
  },
  {
    "codigo": 40,
    "nome": "Ratliff Kent",
    "dataNascimento": "2000-05-10T04:07:16+03:00"
  },
  {
    "codigo": 41,
    "nome": "Cora Booth",
    "dataNascimento": "1997-04-14T06:38:27+03:00"
  },
  {
    "codigo": 42,
    "nome": "Lorraine Huffman",
    "dataNascimento": "1986-11-25T10:33:18+02:00"
  },
  {
    "codigo": 43,
    "nome": "Angeline Grant",
    "dataNascimento": "1988-05-07T05:53:41+03:00"
  },
  {
    "codigo": 44,
    "nome": "Parrish Humphrey",
    "dataNascimento": "1999-09-05T11:57:16+03:00"
  },
  {
    "codigo": 45,
    "nome": "Blackwell Marquez",
    "dataNascimento": "1999-01-26T09:23:06+02:00"
  },
  {
    "codigo": 46,
    "nome": "Kane Galloway",
    "dataNascimento": "2009-10-16T05:30:57+03:00"
  },
  {
    "codigo": 47,
    "nome": "Rachael Price",
    "dataNascimento": "2007-03-23T02:01:18+03:00"
  },
  {
    "codigo": 48,
    "nome": "Preston Gallagher",
    "dataNascimento": "1987-12-05T03:42:08+02:00"
  },
  {
    "codigo": 49,
    "nome": "Selena Blackburn",
    "dataNascimento": "1993-04-22T02:03:57+03:00"
  },
  {
    "codigo": 50,
    "nome": "Kennedy Peterson",
    "dataNascimento": "2006-06-29T03:12:54+03:00"
  },
  {
    "codigo": 51,
    "nome": "Myrtle Steele",
    "dataNascimento": "1991-03-04T12:04:19+03:00"
  },
  {
    "codigo": 52,
    "nome": "Megan Cortez",
    "dataNascimento": "1992-08-12T11:32:33+03:00"
  },
  {
    "codigo": 53,
    "nome": "Anita Lindsey",
    "dataNascimento": "2007-08-01T12:01:29+03:00"
  },
  {
    "codigo": 54,
    "nome": "Davidson Miller",
    "dataNascimento": "1995-02-26T08:02:03+03:00"
  },
  {
    "codigo": 55,
    "nome": "Foley Riddle",
    "dataNascimento": "1995-04-10T11:31:19+03:00"
  },
  {
    "codigo": 56,
    "nome": "Parks Vazquez",
    "dataNascimento": "2007-08-03T11:48:43+03:00"
  },
  {
    "codigo": 57,
    "nome": "Loretta Mullen",
    "dataNascimento": "2013-01-20T09:49:21+02:00"
  },
  {
    "codigo": 58,
    "nome": "Cherie Rowe",
    "dataNascimento": "2000-09-14T08:52:37+03:00"
  },
  {
    "codigo": 59,
    "nome": "May Mann",
    "dataNascimento": "2012-12-29T09:15:48+02:00"
  },
  {
    "codigo": 60,
    "nome": "Mckee Osborn",
    "dataNascimento": "1998-12-18T01:34:43+02:00"
  },
  {
    "codigo": 61,
    "nome": "Dillard Rodriquez",
    "dataNascimento": "1993-08-08T05:46:06+03:00"
  },
  {
    "codigo": 62,
    "nome": "Juliette Morrow",
    "dataNascimento": "2003-02-22T04:06:19+03:00"
  },
  {
    "codigo": 63,
    "nome": "Lorena Le",
    "dataNascimento": "1993-05-23T12:26:35+03:00"
  },
  {
    "codigo": 64,
    "nome": "Calhoun Head",
    "dataNascimento": "2015-02-05T05:09:35+02:00"
  },
  {
    "codigo": 65,
    "nome": "Edna Valdez",
    "dataNascimento": "1998-12-17T09:00:20+02:00"
  },
  {
    "codigo": 66,
    "nome": "May Dorsey",
    "dataNascimento": "2002-10-06T12:54:04+03:00"
  },
  {
    "codigo": 67,
    "nome": "Karen Cole",
    "dataNascimento": "1988-02-06T01:12:03+02:00"
  },
  {
    "codigo": 68,
    "nome": "Adele Cervantes",
    "dataNascimento": "1987-10-09T09:08:55+03:00"
  },
  {
    "codigo": 69,
    "nome": "Roy Davenport",
    "dataNascimento": "1995-07-06T04:48:43+03:00"
  },
  {
    "codigo": 70,
    "nome": "Leon Sargent",
    "dataNascimento": "2000-12-10T07:41:44+02:00"
  },
  {
    "codigo": 71,
    "nome": "Lowery Valencia",
    "dataNascimento": "1993-04-09T02:07:37+03:00"
  },
  {
    "codigo": 72,
    "nome": "Slater Wilkerson",
    "dataNascimento": "1989-10-06T04:48:02+03:00"
  },
  {
    "codigo": 73,
    "nome": "Hope Levine",
    "dataNascimento": "2010-10-21T05:52:16+02:00"
  },
  {
    "codigo": 74,
    "nome": "Mclaughlin Arnold",
    "dataNascimento": "1991-10-11T02:48:54+03:00"
  },
  {
    "codigo": 75,
    "nome": "Sexton Maldonado",
    "dataNascimento": "1993-11-20T10:04:12+02:00"
  },
  {
    "codigo": 76,
    "nome": "Singleton Little",
    "dataNascimento": "2013-11-21T08:16:19+02:00"
  },
  {
    "codigo": 77,
    "nome": "Holden Pollard",
    "dataNascimento": "2016-06-09T04:32:56+03:00"
  },
  {
    "codigo": 78,
    "nome": "Mari Waters",
    "dataNascimento": "1987-04-28T04:10:51+03:00"
  },
  {
    "codigo": 79,
    "nome": "Etta Garner",
    "dataNascimento": "2007-03-24T04:42:21+03:00"
  },
  {
    "codigo": 80,
    "nome": "Ross Combs",
    "dataNascimento": "1992-04-25T08:32:41+03:00"
  },
  {
    "codigo": 81,
    "nome": "Bernadine Terrell",
    "dataNascimento": "2010-07-02T06:00:05+03:00"
  },
  {
    "codigo": 82,
    "nome": "Jacklyn Gilmore",
    "dataNascimento": "2006-04-27T10:40:53+03:00"
  },
  {
    "codigo": 83,
    "nome": "Taylor Kinney",
    "dataNascimento": "1987-08-16T05:13:38+03:00"
  },
  {
    "codigo": 84,
    "nome": "Gibson Kramer",
    "dataNascimento": "2013-08-20T01:25:42+03:00"
  },
  {
    "codigo": 85,
    "nome": "Eve Bruce",
    "dataNascimento": "2008-10-13T10:43:26+03:00"
  },
  {
    "codigo": 86,
    "nome": "Eula Potter",
    "dataNascimento": "2014-02-11T11:36:15+02:00"
  },
  {
    "codigo": 87,
    "nome": "Wise Mcneil",
    "dataNascimento": "2007-03-01T10:31:00+03:00"
  },
  {
    "codigo": 88,
    "nome": "Lavonne Norton",
    "dataNascimento": "1987-05-23T05:54:00+03:00"
  },
  {
    "codigo": 89,
    "nome": "Vega Berg",
    "dataNascimento": "1995-10-16T12:04:50+03:00"
  },
  {
    "codigo": 90,
    "nome": "Flynn Preston",
    "dataNascimento": "2006-02-12T01:52:08+02:00"
  },
  {
    "codigo": 91,
    "nome": "Tamra Chavez",
    "dataNascimento": "1991-12-13T04:12:38+02:00"
  },
  {
    "codigo": 92,
    "nome": "Fields Quinn",
    "dataNascimento": "2009-04-26T02:46:07+03:00"
  },
  {
    "codigo": 93,
    "nome": "Margaret Holland",
    "dataNascimento": "1988-01-14T01:24:06+02:00"
  },
  {
    "codigo": 94,
    "nome": "Melisa Browning",
    "dataNascimento": "1994-05-05T08:32:51+03:00"
  },
  {
    "codigo": 95,
    "nome": "Blanche Johnson",
    "dataNascimento": "1992-10-20T07:36:41+02:00"
  },
  {
    "codigo": 96,
    "nome": "Valenzuela James",
    "dataNascimento": "2000-10-19T03:49:52+03:00"
  },
  {
    "codigo": 97,
    "nome": "Laurie English",
    "dataNascimento": "2006-10-20T05:59:11+03:00"
  },
  {
    "codigo": 98,
    "nome": "Jeanine Hunt",
    "dataNascimento": "1994-04-04T01:40:25+03:00"
  },
  {
    "codigo": 99,
    "nome": "Whitfield Shepard",
    "dataNascimento": "2006-01-07T04:47:57+02:00"
  },
  {
    "codigo": 100,
    "nome": "Lester Weber",
    "dataNascimento": "1990-03-19T06:13:06+03:00"
  }
];

    res.setHeader('Content-Type', 'application/json');
    res.send(results);
    res.end();
};
