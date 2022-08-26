The idea is to use all of the historical data about what companies tend to which tenders and use that to drive the recommendation engine.
In the end, we want to input data about any offer, calculate your win probability, and in turn show more relevant opportunities.


We'll ingest data that looks like this 
Tender
	-> Lots
		-> Bids
			-> Winning bid
				-> Legal entity
and compile a new collection of Legal entities with the tenders they have won without any lots
we use this new collection to simulate user data.