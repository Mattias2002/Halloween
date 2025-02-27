import React from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import CandyList from './components/CandyList';
import CandyDetails from './components/CandyDetails';
import DataDescription from './components/DataDescription';

const candyData = `competitorname,chocolate,fruity,caramel,peanutyalmondy,nougat,crispedricewafer,hard,bar,pluribus,sugarpercent,pricepercent,winpercent
100 Grand,1,0,1,0,0,1,0,1,0,.73199999,.86000001,66.971725
3 Musketeers,1,0,0,0,1,0,0,1,0,.60399997,.51099998,67.602936
One dime,0,0,0,0,0,0,0,0,0,.011,.116,32.261086
One quarter,0,0,0,0,0,0,0,0,0,.011,.51099998,46.116505
Air Heads,0,1,0,0,0,0,0,0,0,.90600002,.51099998,52.341465
Almond Joy,1,0,0,1,0,0,0,1,0,.465,.76700002,50.347546
Baby Ruth,1,0,1,1,1,0,0,1,0,.60399997,.76700002,56.914547
Boston Baked Beans,0,0,0,1,0,0,0,0,1,.31299999,.51099998,23.417824
Candy Corn,0,0,0,0,0,0,0,0,1,.90600002,.32499999,38.010963
Caramel Apple Pops,0,1,1,0,0,0,0,0,0,.60399997,.32499999,34.517681
Charleston Chew,1,0,0,0,1,0,0,1,0,.60399997,.51099998,38.975037
Chewey Lemonhead Fruit Mix,0,1,0,0,0,0,0,0,1,.73199999,.51099998,36.017628
Chiclets,0,1,0,0,0,0,0,0,1,.046,.32499999,24.524988
Dots,0,1,0,0,0,0,0,0,1,.73199999,.51099998,42.272076
Dum Dums,0,1,0,0,0,0,1,0,0,.73199999,.034000002,39.460556
Fruit Chews,0,1,0,0,0,0,0,0,1,.127,.034000002,43.088924
Fun Dip,0,1,0,0,0,0,1,0,0,.73199999,.32499999,39.185505
Gobstopper,0,1,0,0,0,0,1,0,1,.90600002,.45300001,46.783348
Haribo Gold Bears,0,1,0,0,0,0,0,0,1,.465,.465,57.11974
Haribo Happy Cola,0,0,0,0,0,0,0,0,1,.465,.465,34.158958
Haribo Sour Bears,0,1,0,0,0,0,0,0,1,.465,.465,51.41243
Haribo Twin Snakes,0,1,0,0,0,0,0,0,1,.465,.465,42.178772
Hershey's Kisses,1,0,0,0,0,0,0,0,1,.127,.093000002,55.375454
Hershey's Krackel,1,0,0,0,0,1,0,1,0,.43000001,.91799998,62.284481
Hershey's Milk Chocolate,1,0,0,0,0,0,0,1,0,.43000001,.91799998,56.490501
Hershey's Special Dark,1,0,0,0,0,0,0,1,0,.43000001,.91799998,59.236122
Jawbusters,0,1,0,0,0,0,1,0,1,.093000002,.51099998,28.127439
Junior Mints,1,0,0,0,0,0,0,0,1,.197,.51099998,57.21925
Kit Kat,1,0,0,0,0,1,0,1,0,.31299999,.51099998,76.7686
Laffy Taffy,0,1,0,0,0,0,0,0,0,.22,.116,41.389557
Lemonhead,0,1,0,0,0,0,1,0,0,.046,.104,39.141056
Lifesavers big ring gummies,0,1,0,0,0,0,0,0,0,.26699999,.27900001,52.911392
Peanut butter M&M's,1,0,0,1,0,0,0,0,1,.82499999,.65100002,71.46505
M&M's,1,0,0,0,0,0,0,0,1,.82499999,.65100002,66.574585
Mike & Ike,0,1,0,0,0,0,0,0,1,.87199998,.32499999,46.411716
Milk Duds,1,0,1,0,0,0,0,0,1,.30199999,.51099998,55.064072
Milky Way,1,0,1,0,1,0,0,1,0,.60399997,.65100002,73.099556
Milky Way Midnight,1,0,1,0,1,0,0,1,0,.73199999,.44100001,60.800701
Milky Way Simply Caramel,1,0,1,0,0,0,0,1,0,.96499997,.86000001,64.35334
Mounds,1,0,0,0,0,0,0,1,0,.31299999,.86000001,47.829754
Mr Good Bar,1,0,0,1,0,0,0,1,0,.31299999,.91799998,54.526451
Nerds,0,1,0,0,0,0,1,0,1,.84799999,.32499999,55.354046
Nestle Butterfinger,1,0,0,1,0,0,0,1,0,.60399997,.76700002,70.735641
Nestle Crunch,1,0,0,0,0,1,0,1,0,.31299999,.76700002,66.47068
Nik L Nip,0,1,0,0,0,0,0,0,1,.197,.97600001,22.445341
Now & Later,0,1,0,0,0,0,0,0,1,.22,.32499999,39.4468
Payday,0,0,0,1,1,0,0,1,0,.465,.76700002,46.296597
Peanut M&Ms,1,0,0,1,0,0,0,0,1,.59299999,.65100002,69.483788
Pixie Sticks,0,0,0,0,0,0,0,0,1,.093000002,.023,37.722336
Pop Rocks,0,1,0,0,0,0,1,0,1,.60399997,.83700001,41.265511
Red vines,0,1,0,0,0,0,0,0,1,.58099997,.116,37.348522
Reese's Miniatures,1,0,0,1,0,0,0,0,0,.034000002,.27900001,81.866257
Reese's Peanut Butter cup,1,0,0,1,0,0,0,0,0,.72000003,.65100002,84.18029
Reese's pieces,1,0,0,1,0,0,0,0,1,.40599999,.65100002,73.43499
Reese's stuffed with pieces,1,0,0,1,0,0,0,0,0,.98799998,.65100002,72.887901
Ring pop,0,1,0,0,0,0,1,0,0,.73199999,.96499997,35.290756
Rolo,1,0,1,0,0,0,0,0,1,.86000001,.86000001,65.716286
Root Beer Barrels,0,0,0,0,0,0,1,0,1,.73199999,.068999998,29.703691
Runts,0,1,0,0,0,0,1,0,1,.87199998,.27900001,42.849144
Sixlets,1,0,0,0,0,0,0,0,1,.22,.081,34.722
Skittles original,0,1,0,0,0,0,0,0,1,.94099998,.22,63.08514
Skittles wildberry,0,1,0,0,0,0,0,0,1,.94099998,.22,55.103695
Nestle Smarties,1,0,0,0,0,0,0,0,1,.26699999,.97600001,37.887188
Smarties candy,0,1,0,0,0,0,1,0,1,.26699999,.116,45.995827
Snickers,1,0,1,1,1,0,0,1,0,.546,.65100002,76.673782
Snickers Crisper,1,0,1,1,0,1,0,1,0,.60399997,.65100002,59.529251
Sour Patch Kids,0,1,0,0,0,0,0,0,1,.068999998,.116,59.863998
Sour Patch Tricksters,0,1,0,0,0,0,0,0,1,.068999998,.116,52.825947
Starburst,0,1,0,0,0,0,0,0,1,.15099999,.22,67.037628
Strawberry bon bons,0,1,0,0,0,0,1,0,1,.56900001,.057999998,34.578991
Sugar Babies,0,0,1,0,0,0,0,0,1,.96499997,.76700002,33.43755
Sugar Daddy,0,0,1,0,0,0,0,0,0,.41800001,.32499999,32.230995
Super Bubble,0,1,0,0,0,0,0,0,0,.162,.116,27.303865
Swedish Fish,0,1,0,0,0,0,0,0,1,.60399997,.755,54.861111
Tootsie Pop,1,1,0,0,0,0,1,0,0,.60399997,.32499999,48.982651
Tootsie Roll Juniors,1,0,0,0,0,0,0,0,0,.31299999,.51099998,43.068897
Tootsie Roll Midgies,1,0,0,0,0,0,0,0,1,.17399999,.011,45.736748
Tootsie Roll Snack Bars,1,0,0,0,0,0,0,1,0,.465,.32499999,49.653503
Trolli Sour Bites,0,1,0,0,0,0,0,0,1,.31299999,.255,47.173229
Twix,1,0,1,0,0,1,0,1,0,.546,.90600002,81.642914
Twizzlers,0,1,0,0,0,0,0,0,0,.22,.116,45.466282
Warheads,0,1,0,0,0,0,1,0,0,.093000002,.116,39.011898
Welch's Fruit Snacks,0,1,0,0,0,0,0,0,1,.31299999,.31299999,44.375519
Werther's Original Caramel,0,0,1,0,0,0,1,0,0,.186,.26699999,41.904308
Whoppers,1,0,0,0,0,1,0,0,1,.87199998,.84799999,49.524113
`;

function App() {
  return (
    <div className="container">
      <header>
        <h1>Halloween Candy Rankings</h1>
      </header>
      <DataDescription />
      <Routes>
        <Route path="/" element={<CandyList data={candyData} />} />
        <Route path="/candy/:name" element={<CandyDetails data={candyData} />} />
      </Routes>
    </div>
  );
}

export default App;
