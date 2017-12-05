'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Recipes', [
              { artist: "Radiohead", track: "Paranoid Android", album: "OK Computer", instructions: "1 - Plug in OD-1 2 - Plug in Mobius 3 - Play Guitar", instrument: "Lead Guitar", sampleURL: "https://youtu.be/fHiGbolFFGw?t=337", createdAt: new Date(), updatedAt: new Date(), id: 10000 },
              { artist: "Muse", track: "Knights of Cydonia", album: "Black Holes & Revelations", instructions: "1 - Plug in DS-1 2 - Plug in Big Muff - Play Guitar", instrument: "Lead Guitar", sampleURL: "https://youtu.be/Q3Yc3HhSl1Q?t=160", createdAt: new Date(), updatedAt: new Date(), id: 10001 },
              { artist: "Cake", track: "The Distance", album: "Fashion Nugget", instructions: "1 - Plug in Tremolo 2 - Plug in Superego - Play Guitar", instrument: "Lead Guitar", sampleURL: "https://youtu.be/F_HoMkkRHv8?t=69", createdAt: new Date(), updatedAt: new Date(), id: 10002 },
              { artist: "Foo Fighters", track: "Everlong", album: "The Colour and the Shape", instructions: "1 - Plug in Flanger 2 - Plug in Phaser - Play Guitar", instrument: "Rhythm Guitar", sampleURL: "https://youtu.be/eBG7P-K-r1Y?t=12", createdAt: new Date(), updatedAt: new Date(), id: 10003 },
              { artist: "Rage Against the Machine", track: "Bulls On Parade", album: "Evil Empire", instructions: "1 - Plug in Crybaby Wah 2 - Plug in Digitech Wah - Play Guitar", instrument: "Rhythm Guitar", sampleURL: "https://youtu.be/3L4YrGaR8E4?t=26", createdAt: new Date(), updatedAt: new Date(), id: 10004 }
          ], {});
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkInsert('Person', [{
        name: 'John Doe',
        isBetaMember: false
      }], {});
    */
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Recipes', null, {});

    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkDelete('Person', null, {});
    */
  }
};
