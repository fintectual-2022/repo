export type ProcedureType =
		| "OPEN"
		| "RESTRICTED"
		| "NEGOTIATED"
		| "COMPETITIVE_DIALOG"
		| "NEGOTIATED_WITH_PUBLICATION"
		| "NEGOTIATED_WITHOUT_PUBLICATION"
		| "DESIGN_CONTEST"
		| "MINITENDER"
		| "DPS_PURCHASE"
		| "OUTRIGHT_AWARD"
		| "APPROACHING_BIDDERS"
		| "PUBLIC_CONTEST"
		| "SIMPLIFIED_BELOW_THE_THRESHOLD"
		| "INOVATION_PARTNERSHIP"
		| "CONCESSION"
		| "OTHER"
export type SizeType =
		| "BELOW_THE_THRESHOLD"
		| "ABOVE_THE_THRESHOLD"
		| "SMALL_SCALE"
export type SupplyType = "SUPPLIES" | "WORKS" | "SERVICES" | "OTHER"
/**
 * method used for bids evaluation - one of the LOWEST_PRICE or MEAT (most economically advantageous tender), individual MEAT criteria are in awardCriteria
 */
export type SelectionMethod = "MEAT" | "LOWEST_PRICE"
/**
 * Date YYYY.MM.DD
 */
export type TenderDate = string
/**
 * Date YYYY.MM.DD
 */
export type TenderDate1 = string
/**
 * Date YYYY.MM.DD
 */
export type TenderDate2 = string
/**
 * Date YYYY.MM.DD
 */
export type TenderDate3 = string
/**
 * Date with time YYYY.MM.DDThh:mm:ss
 */
export type TenderDateTime = string
/**
 * Date with time YYYY.MM.DDThh:mm:ss
 */
export type TenderDateTime1 = string
/**
 * Date YYYY.MM.DD
 */
export type TenderDate4 = string
/**
 * Date YYYY.MM.DD
 */
export type TenderDate5 = string
export type TenderDate6 = string
/**
 * Central, utility, regional/local, supported body (SOE's which are not utilities, research institutions,health care insurance companies, hospitals) institution under public law (prispevkove organizace), other
 */
export type BuyerType =
		| "NATIONAL_AUTHORITY"
		| "NATIONAL_AGENCY"
		| "REGIONAL_AUTHORITY"
		| "REGIONAL_AGENCY"
		| "PUBLIC_BODY"
		| "EUROPEAN_AGENCY"
		| "UTILITIES"
		| "OTHER"
/**
 * Score of indicator
 */
export type IndicatorScore = number
/**
 * Type of indicator
 */
export type IndicatorType =
		| "INTEGRITY_SINGLE_BID"
		| "INTEGRITY_CALL_FOR_TENDER_PUBLICATION"
		| "INTEGRITY_ADVERTISEMENT_PERIOD"
		| "INTEGRITY_PROCEDURE_TYPE"
		| "INTEGRITY_DECISION_PERIOD"
		| "INTEGRITY_TAX_HAVEN"
		| "INTEGRITY_NEW_COMPANY"
		| "ADMINISTRATIVE_CENTRALIZED_PROCUREMENT"
		| "ADMINISTRATIVE_ELECTRONIC_AUCTION"
		| "ADMINISTRATIVE_COVERED_BY_GPA"
		| "ADMINISTRATIVE_FRAMEWORK_AGREEMENT"
		| "ADMINISTRATIVE_ENGLISH_AS_FOREIGN_LANGUAGE"
		| "ADMINISTRATIVE_NOTICE_AND_AWARD_DISCREPANCIES"
		| "TRANSPARENCY_NUMBER_OF_KEY_MISSING_FIELDS"
		| "TRANSPARENCY_AWARD_DATE_MISSING"
		| "TRANSPARENCY_BUYER_NAME_MISSING"
		| "TRANSPARENCY_PROC_METHOD_MISSING"
		| "TRANSPARENCY_BUYER_LOC_MISSING"
		| "TRANSPARENCY_BIDDER_ID_MISSING"
		| "TRANSPARENCY_BIDDER_NAME_MISSING"
		| "TRANSPARENCY_MARKET_MISSING"
		| "TRANSPARENCY_TITLE_MISSING"
		| "TRANSPARENCY_VALUE_MISSING"
		| "TRANSPARENCY_YEAR_MISSING"
		| "INTEGRITY_WINNER_CA_SHARE"
export type IndicatorStatusType =
		| "CALCULATED"
		| "INSUFFICIENT_DATA"
		| "UNDEFINED"
/**
 * Date YYYY.MM.DD
 */
export type TenderDate7 = string
/**
 * Date YYYY.MM.DD
 */
export type TenderDate8 = string
/**
 * Date YYYY.MM.DD
 */
export type TenderDate9 = string
/**
 * Date YYYY.MM.DD
 */
export type TenderDate10 = string
/**
 * Date YYYY.MM.DD
 */
export type TenderDate11 = string
/**
 * Central, utility, regional/local, supported body (SOE's which are not utilities, research institutions,health care insurance companies, hospitals) institution under public law (prispevkove organizace), other
 */
export type BuyerType1 =
		| "NATIONAL_AUTHORITY"
		| "NATIONAL_AGENCY"
		| "REGIONAL_AUTHORITY"
		| "REGIONAL_AGENCY"
		| "PUBLIC_BODY"
		| "EUROPEAN_AGENCY"
		| "UTILITIES"
		| "OTHER"
/**
 * Date of publication (of given version)
 */
export type TenderDate12 = string
/**
 * Date of dispatch (different from publication date)
 */
export type TenderDate13 = string
/**
 * Language code of the publication
 */
export type Language = string
/**
 * Identifies given type of publication http://ocds.open-contracting.org/standard/r/1__0__RC/en/schema/codelists/#release-tag
 */
export type FormType =
		| "CONTRACT_NOTICE"
		| "CONTRACT_AWARD"
		| "CONTRACT_CANCELLATION"
		| "CONTRACT_IMPLEMENTATION"
		| "NOTICE_ON_BUYER_PROFILE"
		| "PRIOR_INFORMATION_NOTICE"
		| "CONTRACT_UPDATE"
		| "CONTRACT_AMENDMENT"
		| "OTHER"
		| "COMPILED"
/**
 * Date with time YYYY.MM.DDThh:mm:ss
 */
export type TenderDateTime2 = string
export type IndicatorScore1 = number
export type CleanedMainCPV = string
/**
 * Type of indicator score
 */
export type ScoreType =
		| "INTEGRITY"
		| "ADMINISTRATIVE"
		| "TRANSPARENCY"
		| "TENDER"
/**
 * Calculated indicator score
 */
export type IndicatorScore2 = number
/**
 * Date YYYY.MM.DD
 */
export type TenderDate14 = string
/**
 * Array of Tenders
 */
export type TenderSet = Tender[]

export interface Tender {
		/**
		 * Tender ID
		 */
		id: string
		/**
		 * Country of tender
		 */
		country?: string
		/**
		 * DB entry create date-time with ms
		 */
		created?: string
		/**
		 * DB entry modified date-time with ms
		 */
		modified?: string
		/**
		 * Type of procedure - unstructured
		 */
		nationalProcedureType?: string
		/**
		 * Reference number given to tender by buyer
		 */
		buyerAssignedId?: string
		/**
		 * Tender title
		 */
		title?: string
		/**
		 * Tender title English
		 */
		titleEnglish?: string
		/**
		 * Subject description
		 */
		description?: string
		/**
		 * Name of body to which appeals should be filed
		 */
		appealBodyName?: string
		/**
		 * Name of body to which appeals should be filed
		 */
		mediationBodyName?: string
		/**
		 * excessiveFrameworkAgreementJustification
		 */
		excessiveFrameworkAgreementJustification?: string
		/**
		 * acceleratedProcedureJustification
		 */
		acceleratedProcedureJustification?: string
		/**
		 * Description of deposits required (ideally number and currency, decomposed to price)
		 */
		deposits?: string
		/**
		 * Description of personal requirements on bidder
		 */
		personalRequirements?: string
		/**
		 * Description of economic requirements on bidder
		 */
		economicRequirements?: string
		/**
		 * Description of technical requirements on bidder
		 */
		technicalRequirements?: string
		/**
		 * cancellationReason
		 */
		cancellationReason?: string
		/**
		 * modificationReason
		 */
		modificationReason?: string
		/**
		 * modificationReasonDescription
		 */
		modificationReasonDescription?: string
		procedureType?: ProcedureType
		size?: SizeType
		supplyType?: SupplyType
		selectionMethod?: SelectionMethod
		/**
		 * Electronic invoicing will be accepted
		 */
		isEInvoiceAccepted?: boolean
		/**
		 * Is tender awarded by central purchasing authority?
		 */
		isCentralProcurement?: boolean
		/**
		 * Is covered by GPA?
		 */
		isCoveredByGpa?: boolean
		/**
		 * Is there a price asked for tender documents provision?
		 */
		documentsPayable?: boolean
		/**
		 * The tender involves joint procurement
		 */
		isJointProcurement?: boolean
		/**
		 * Is awarded as superior framework agreement?
		 */
		isFrameworkAgreement?: boolean
		/**
		 * Is accelerated procedure
		 */
		isAcceleratedProcedure?: boolean
		/**
		 * Is whole tender cancelled
		 */
		isWholeTenderCancelled?: boolean
		/**
		 * Is either initiation of dynamic purchasing system, or a purchase via one
		 */
		isDps?: boolean
		/**
		 * Is awarded by eauction?
		 */
		isElectronicAuction?: boolean
		/**
		 * Is the tender divided into lots?
		 */
		hasLots?: boolean
		/**
		 * Are variant offers accepted?
		 */
		areVariantsAccepted?: boolean
		isDocumentsAccessRestricted?: boolean
		/**
		 * Tender has options?
		 */
		hasOptions?: boolean
		/**
		 * Boolean whether the purchase is being made for someone else. e.g. city purchases on behalf of one of its schools...
		 */
		isOnBehalfOf?: boolean
		estimatedStartDate?: TenderDate
		cancellationDate?: TenderDate1
		estimatedCompletionDate?: TenderDate2
		awardDeadline?: TenderDate3
		bidDeadline?: TenderDateTime
		documentsDeadline?: TenderDateTime1
		awardDecisionDate?: TenderDate4
		contractSignatureDate?: TenderDate5
		completionDate?: TenderDate5
		/**
		 * Estimated tender duration in months
		 */
		estimatedDurationInMonths?: number
		/**
		 * Estimated tender duration in days
		 */
		estimatedDurationInDays?: number
		/**
		 * Estimated tender duration in years
		 */
		estimatedDurationInYears?: number
		/**
		 * awardDeadlineDuration
		 */
		awardDeadlineDuration?: number
		/**
		 * Envisaged maximum number of participants to the framework agreement
		 */
		maxFrameworkAgreementParticipants?: number
		/**
		 * Maximum number of bids, typically used in Restricted or Negotiated with publication procedure
		 */
		maxBidsCount?: number
		envisagedMinCandidatesCount?: number
		envisagedMaxCandidatesCount?: number
		envisagedCandidatesCount?: number
		documentsPrice?: Price
		estimatedPrice?: Price1
		finalPrice?: Price2
		furtherInformationProvider?: Buyer
		specificationsProvider?: Buyer1
		bidsRecipient?: Buyer2
		addressOfImplementation?: Address1
		/**
		 * Array of Funding
		 */
		fundings?: Funding[]
		/**
		 * Array of Indicators
		 */
		indicators?: Indicator[]
		/**
		 * If the purchase is being made for someone else. e.g. city purchases on behalf of one of its schools...
		 */
		onBehalfOf?: Buyer3[]
		/**
		 * Array of Buyer
		 */
		buyers?: Buyer4[]
		/**
		 * Array of Body
		 */
		administrators?: Buyer5[]
		/**
		 * Array of Lot
		 */
		lots?: Lot[]
		/**
		 * Array of CPV codes of the subject
		 */
		cpvs?: CPV1[]
		/**
		 * MEAT criteria
		 */
		awardCriteria?: AwardCriterion[]
		eligibilityCriteria?: string
		/**
		 * Array of Languages in which tenders or requests to participate may be submitted
		 */
		eligibleBidLanguages?: string[]
		/**
		 * Reasons for use of negotiated procedure without publication, such as: no bids, research, technical, artistic, legal, urgency,additional work, work repetition,design contest,commodity market
		 */
		npwpReasons?: string[]
		/**
		 * Array of relevant publications, including url info for original CFT, CA...
		 */
		publications?: Publication[]
		/**
		 * Array of documents relevant to tender (tender documentation, protocol on bids evaluation etc)
		 */
		documents?: TenderDocument[]
		/**
		 * corrections
		 */
		corrections?: Correction[]
		documentsLocation?: Address4
		ot?: OpentenderAdditionalInformation1
		[k: string]: unknown
}
/**
 * Price of tender documents
 */
export interface Price {
		/**
		 * ISO 4217 of used currency
		 */
		currency?: string
		publicationDate?: TenderDate6
		/**
		 * ISO 4217 of used currency
		 */
		currencyNational?: string
		/**
		 * VAT percentage (0 if no VAT is paid)
		 */
		vat?: number
		/**
		 * Price without VAT
		 */
		netAmount?: number
		/**
		 * Price in national currency without VAT
		 */
		netAmountNational?: number
		/**
		 * Price in EUR without VAT
		 */
		netAmountEur?: number
		/**
		 * Price including VAT
		 */
		amountWithVat?: number
		/**
		 * Minimum reachable value of netAmount - typically given by range estimate or spread of bids
		 */
		minNetAmount?: number
		/**
		 * Maximum reachable value of netAmount - typically given by range estimate or spread of bids
		 */
		maxNetAmount?: number
		/**
		 * Minimum reachable value of amountWithVAT
		 */
		minAmountWithVat?: number
		/**
		 * Maximum reachable value of amountWithVAT
		 */
		maxAmountWithVat?: number
		[k: string]: unknown
}
/**
 * Estimated value of tender lot
 */
export interface Price1 {
		/**
		 * ISO 4217 of used currency
		 */
		currency?: string
		publicationDate?: TenderDate6
		/**
		 * ISO 4217 of used currency
		 */
		currencyNational?: string
		/**
		 * VAT percentage (0 if no VAT is paid)
		 */
		vat?: number
		/**
		 * Price without VAT
		 */
		netAmount?: number
		/**
		 * Price in national currency without VAT
		 */
		netAmountNational?: number
		/**
		 * Price in EUR without VAT
		 */
		netAmountEur?: number
		/**
		 * Price including VAT
		 */
		amountWithVat?: number
		/**
		 * Minimum reachable value of netAmount - typically given by range estimate or spread of bids
		 */
		minNetAmount?: number
		/**
		 * Maximum reachable value of netAmount - typically given by range estimate or spread of bids
		 */
		maxNetAmount?: number
		/**
		 * Minimum reachable value of amountWithVAT
		 */
		minAmountWithVat?: number
		/**
		 * Maximum reachable value of amountWithVAT
		 */
		maxAmountWithVat?: number
		[k: string]: unknown
}
export interface Price2 {
		/**
		 * ISO 4217 of used currency
		 */
		currency?: string
		publicationDate?: TenderDate6
		/**
		 * ISO 4217 of used currency
		 */
		currencyNational?: string
		/**
		 * VAT percentage (0 if no VAT is paid)
		 */
		vat?: number
		/**
		 * Price without VAT
		 */
		netAmount?: number
		/**
		 * Price in national currency without VAT
		 */
		netAmountNational?: number
		/**
		 * Price in EUR without VAT
		 */
		netAmountEur?: number
		/**
		 * Price including VAT
		 */
		amountWithVat?: number
		/**
		 * Minimum reachable value of netAmount - typically given by range estimate or spread of bids
		 */
		minNetAmount?: number
		/**
		 * Maximum reachable value of netAmount - typically given by range estimate or spread of bids
		 */
		maxNetAmount?: number
		/**
		 * Minimum reachable value of amountWithVAT
		 */
		minAmountWithVat?: number
		/**
		 * Maximum reachable value of amountWithVAT
		 */
		maxAmountWithVat?: number
		[k: string]: unknown
}
/**
 * Body from whom further information can be obtained
 */
export interface Buyer {
		id?: string
		isSme?: boolean
		/**
		 * Name of body
		 */
		name?: string
		/**
		 * The name of the contact person
		 */
		contactName?: string
		/**
		 * Description of contact point - usually
		 */
		contactPoint?: string
		/**
		 * The phone number of the contact
		 */
		phone?: string
		email?: string
		web?: string
		address?: Address
		/**
		 * Array of Buyer Activity Type
		 */
		mainActivities?: string[]
		buyerType?: BuyerType
		/**
		 * Identifies the leader of consortium (typically buyer or bidder)
		 */
		isLeader?: boolean
		metaData?: MetaData
		/**
		 * Array of Indicators
		 */
		indicators?: Indicator[]
		[k: string]: unknown
}
/**
 * Address of the body seat
 */
export interface Address {
		/**
		 * Raw string for unstructured address
		 */
		rawAddress?: string
		/**
		 * Street including numbers
		 */
		street?: string
		city?: string
		state?: string
		postcode?: string
		/**
		 * Country Code: ISO 3166-1 alpha-2 = two letter
		 */
		country?: string
		/**
		 * URL
		 */
		url?: string
		/**
		 * Array of Nuts
		 */
		nuts?: (string | null)[]
		ot?: OpentenderAdditionalInformation
		[k: string]: unknown
}
export interface OpentenderAdditionalInformation {
		/**
		 * Cleaned Nuts code
		 */
		nutscode?: string
		[k: string]: unknown
}
export interface MetaData {
		foundationDate?: string
		[k: string]: unknown
}
export interface Indicator {
		value?: IndicatorScore
		type?: IndicatorType
		status?: IndicatorStatusType
		[k: string]: unknown
}
/**
 * Body from whom specifications and additional documents can be obtained
 */
export interface Buyer1 {
		id?: string
		isSme?: boolean
		/**
		 * Name of body
		 */
		name?: string
		/**
		 * The name of the contact person
		 */
		contactName?: string
		/**
		 * Description of contact point - usually
		 */
		contactPoint?: string
		/**
		 * The phone number of the contact
		 */
		phone?: string
		email?: string
		web?: string
		address?: Address
		/**
		 * Array of Buyer Activity Type
		 */
		mainActivities?: string[]
		buyerType?: BuyerType
		/**
		 * Identifies the leader of consortium (typically buyer or bidder)
		 */
		isLeader?: boolean
		metaData?: MetaData
		/**
		 * Array of Indicators
		 */
		indicators?: Indicator[]
		[k: string]: unknown
}
/**
 * Body to whom tenders/requests to participate must be sent
 */
export interface Buyer2 {
		id?: string
		isSme?: boolean
		/**
		 * Name of body
		 */
		name?: string
		/**
		 * The name of the contact person
		 */
		contactName?: string
		/**
		 * Description of contact point - usually
		 */
		contactPoint?: string
		/**
		 * The phone number of the contact
		 */
		phone?: string
		email?: string
		web?: string
		address?: Address
		/**
		 * Array of Buyer Activity Type
		 */
		mainActivities?: string[]
		buyerType?: BuyerType
		/**
		 * Identifies the leader of consortium (typically buyer or bidder)
		 */
		isLeader?: boolean
		metaData?: MetaData
		/**
		 * Array of Indicators
		 */
		indicators?: Indicator[]
		[k: string]: unknown
}
/**
 * The exact address of the tender performance
 */
export interface Address1 {
		/**
		 * Raw string for unstructured address
		 */
		rawAddress?: string
		/**
		 * Street including numbers
		 */
		street?: string
		city?: string
		state?: string
		postcode?: string
		/**
		 * Country Code: ISO 3166-1 alpha-2 = two letter
		 */
		country?: string
		/**
		 * URL
		 */
		url?: string
		/**
		 * Array of Nuts
		 */
		nuts?: (string | null)[]
		ot?: OpentenderAdditionalInformation
		[k: string]: unknown
}
/**
 * funding sources used (if none listed, implicitly assuming own budget of the body..)
 */
export interface Funding {
		/**
		 * Refined classification of sources (such as type of Operational programme etc..)
		 */
		programme?: string
		/**
		 * source
		 */
		source?: string
		/**
		 * Is the source from EU funds?
		 */
		isEuFund?: boolean
		[k: string]: unknown
}
export interface Buyer3 {
		id?: string
		isSme?: boolean
		/**
		 * Name of body
		 */
		name?: string
		/**
		 * The name of the contact person
		 */
		contactName?: string
		/**
		 * Description of contact point - usually
		 */
		contactPoint?: string
		/**
		 * The phone number of the contact
		 */
		phone?: string
		email?: string
		web?: string
		address?: Address
		/**
		 * Array of Buyer Activity Type
		 */
		mainActivities?: string[]
		buyerType?: BuyerType
		/**
		 * Identifies the leader of consortium (typically buyer or bidder)
		 */
		isLeader?: boolean
		metaData?: MetaData
		/**
		 * Array of Indicators
		 */
		indicators?: Indicator[]
		[k: string]: unknown
}
/**
 * Identification of buyer: contracting authority or other purchasing body
 */
export interface Buyer4 {
		id?: string
		isSme?: boolean
		/**
		 * Name of body
		 */
		name?: string
		/**
		 * The name of the contact person
		 */
		contactName?: string
		/**
		 * Description of contact point - usually
		 */
		contactPoint?: string
		/**
		 * The phone number of the contact
		 */
		phone?: string
		email?: string
		web?: string
		address?: Address
		/**
		 * Array of Buyer Activity Type
		 */
		mainActivities?: string[]
		buyerType?: BuyerType
		/**
		 * Identifies the leader of consortium (typically buyer or bidder)
		 */
		isLeader?: boolean
		metaData?: MetaData
		/**
		 * Array of Indicators
		 */
		indicators?: Indicator[]
		[k: string]: unknown
}
/**
 * Data on external tender administrator, to whom procedure administration was outsourced (in case it was)
 */
export interface Buyer5 {
		id?: string
		isSme?: boolean
		/**
		 * Name of body
		 */
		name?: string
		/**
		 * The name of the contact person
		 */
		contactName?: string
		/**
		 * Description of contact point - usually
		 */
		contactPoint?: string
		/**
		 * The phone number of the contact
		 */
		phone?: string
		email?: string
		web?: string
		address?: Address
		/**
		 * Array of Buyer Activity Type
		 */
		mainActivities?: string[]
		buyerType?: BuyerType
		/**
		 * Identifies the leader of consortium (typically buyer or bidder)
		 */
		isLeader?: boolean
		metaData?: MetaData
		/**
		 * Array of Indicators
		 */
		indicators?: Indicator[]
		[k: string]: unknown
}
/**
 * Contains info on individual lot
 */
export interface Lot {
		id?: string
		/**
		 * Tender lot title
		 */
		title?: string
		/**
		 * Tender lot description
		 */
		description?: string
		/**
		 * Lot number
		 */
		lotNumber?: number
		validBidsCount?: number
		awardDecisionDate?: TenderDate7
		estimatedCompletionDate?: TenderDate8
		estimatedStartDate?: TenderDate9
		contractSignatureDate?: TenderDate10
		cancellationDate?: TenderDate11
		completionDate?: TenderDate5
		selectionMethod?: SelectionMethod
		estimatedPrice?: Price3
		addressOfImplementation?: Address2
		/**
		 * Estimated tender duration in months
		 */
		estimatedDurationInMonths?: number
		/**
		 * Estimated tender duration in days
		 */
		estimatedDurationInDays?: number
		/**
		 * Estimated tender duration in years
		 */
		estimatedDurationInYears?: number
		/**
		 * Envisaged maximum number of participatns to the framework agreement
		 */
		maxFrameworkAgreementParticipants?: number
		/**
		 * foreignCompaniesBidsCount
		 */
		foreignCompaniesBidsCount?: number
		/**
		 * otherEuMemberStatesCompaniesBidsCount
		 */
		otherEuMemberStatesCompaniesBidsCount?: number
		/**
		 * nonEuMemberStatesCompaniesBidsCount
		 */
		nonEuMemberStatesCompaniesBidsCount?: number
		/**
		 * smeBidsCount
		 */
		smeBidsCount?: number
		/**
		 * Array of CPV
		 */
		cpvs?: CPV[]
		/**
		 * Array of Bid
		 */
		bids?: Bid[]
		/**
		 * Contract number
		 */
		contractNumber?: string | number
		/**
		 * Number of bids received including electronic bids
		 */
		bidsCount?: number
		/**
		 * Order on page
		 */
		positionOnPage?: number
		/**
		 * Array of Funding
		 */
		fundings?: Funding1[]
		/**
		 * MEAT criteria
		 */
		awardCriteria?: AwardCriterion[]
		eligibilityCriteria?: string
		/**
		 * Number of bids received via electronic means
		 */
		electronicBidsCount?: number
		/**
		 * Is lot awarded
		 */
		isAwarded?: boolean
		/**
		 * isAwardedToGroupOfSuppliers
		 */
		isAwardedToGroupOfSuppliers?: boolean
		/**
		 * cancellationReason
		 */
		cancellationReason?: string
		status?: "ANNOUNCED" | "AWARDED" | "CANCELLED" | "PREPARED" | "FINISHED"
		[k: string]: unknown
}
/**
 * Estimated value of tender lot
 */
export interface Price3 {
		/**
		 * ISO 4217 of used currency
		 */
		currency?: string
		publicationDate?: TenderDate6
		/**
		 * ISO 4217 of used currency
		 */
		currencyNational?: string
		/**
		 * VAT percentage (0 if no VAT is paid)
		 */
		vat?: number
		/**
		 * Price without VAT
		 */
		netAmount?: number
		/**
		 * Price in national currency without VAT
		 */
		netAmountNational?: number
		/**
		 * Price in EUR without VAT
		 */
		netAmountEur?: number
		/**
		 * Price including VAT
		 */
		amountWithVat?: number
		/**
		 * Minimum reachable value of netAmount - typically given by range estimate or spread of bids
		 */
		minNetAmount?: number
		/**
		 * Maximum reachable value of netAmount - typically given by range estimate or spread of bids
		 */
		maxNetAmount?: number
		/**
		 * Minimum reachable value of amountWithVAT
		 */
		minAmountWithVat?: number
		/**
		 * Maximum reachable value of amountWithVAT
		 */
		maxAmountWithVat?: number
		[k: string]: unknown
}
/**
 * The exact address of the tender performance
 */
export interface Address2 {
		/**
		 * Raw string for unstructured address
		 */
		rawAddress?: string
		/**
		 * Street including numbers
		 */
		street?: string
		city?: string
		state?: string
		postcode?: string
		/**
		 * Country Code: ISO 3166-1 alpha-2 = two letter
		 */
		country?: string
		/**
		 * URL
		 */
		url?: string
		/**
		 * Array of Nuts
		 */
		nuts?: (string | null)[]
		ot?: OpentenderAdditionalInformation
		[k: string]: unknown
}
/**
 * cpv code of the subject
 */
export interface CPV {
		/**
		 * CPV code of the subject
		 */
		code?: string
		/**
		 * Is main cpv code of the subject
		 */
		isMain?: boolean
		/**
		 * Localized name of cpv
		 */
		name?: string
		[k: string]: unknown
}
export interface Bid {
		id?: string
		isWinning?: boolean
		/**
		 * Is there a subcontractor?
		 */
		isSubcontracted?: boolean
		isConsortium?: boolean
		/**
		 * subcontractedProportion
		 */
		subcontractedProportion?: number
		/**
		 * monthlyPriceMonthsCount
		 */
		monthlyPriceMonthsCount?: number
		/**
		 * annualPriceYearsCount
		 */
		annualPriceYearsCount?: number
		/**
		 * Array of Bidders
		 */
		bidders?: Bidder[]
		/**
		 * Array of Unit Price
		 */
		unitPrices?: UnitPrice[]
		payments?: Payment[]
		subcontractors?: Bidder[]
		subcontractedValue?: Price4
		price?: Price5
		[k: string]: unknown
}
export interface Bidder {
		id?: string
		/**
		 * Name of body
		 */
		name?: string
		/**
		 * The name of the contact person
		 */
		contactName?: string
		/**
		 * Description of contact point - usually
		 */
		contactPoint?: string
		/**
		 * The phone number of the contact
		 */
		phone?: string
		email?: string
		web?: string
		address?: Address3
		isSme?: boolean
		/**
		 * isSme
		 */
		isLeader?: boolean
		buyerType?: BuyerType1
		/**
		 * Array of Buyer Activity Type
		 */
		mainActivities?: string[]
		metaData?: MetaData1
		/**
		 * Array of Indicators
		 */
		indicators?: Indicator[]
		[k: string]: unknown
}
/**
 * Address of the body seat
 */
export interface Address3 {
		/**
		 * Raw string for unstructured address
		 */
		rawAddress?: string
		/**
		 * Street including numbers
		 */
		street?: string
		city?: string
		state?: string
		postcode?: string
		/**
		 * Country Code: ISO 3166-1 alpha-2 = two letter
		 */
		country?: string
		/**
		 * URL
		 */
		url?: string
		/**
		 * Array of Nuts
		 */
		nuts?: (string | null)[]
		ot?: OpentenderAdditionalInformation
		[k: string]: unknown
}
export interface MetaData1 {
		foundationDate?: string
		[k: string]: unknown
}
export interface UnitPrice {
		/**
		 * Number of units
		 */
		unitNumber?: number
		/**
		 * currency
		 */
		currency?: string
		[k: string]: unknown
}
export interface Payment {
		paymentDate?: TenderDate5
		price?: Price2
		[k: string]: unknown
}
/**
 * Value of the tender likely to be subcontracted to third parties
 */
export interface Price4 {
		/**
		 * ISO 4217 of used currency
		 */
		currency?: string
		publicationDate?: TenderDate6
		/**
		 * ISO 4217 of used currency
		 */
		currencyNational?: string
		/**
		 * VAT percentage (0 if no VAT is paid)
		 */
		vat?: number
		/**
		 * Price without VAT
		 */
		netAmount?: number
		/**
		 * Price in national currency without VAT
		 */
		netAmountNational?: number
		/**
		 * Price in EUR without VAT
		 */
		netAmountEur?: number
		/**
		 * Price including VAT
		 */
		amountWithVat?: number
		/**
		 * Minimum reachable value of netAmount - typically given by range estimate or spread of bids
		 */
		minNetAmount?: number
		/**
		 * Maximum reachable value of netAmount - typically given by range estimate or spread of bids
		 */
		maxNetAmount?: number
		/**
		 * Minimum reachable value of amountWithVAT
		 */
		minAmountWithVat?: number
		/**
		 * Maximum reachable value of amountWithVAT
		 */
		maxAmountWithVat?: number
		[k: string]: unknown
}
/**
 * Price
 */
export interface Price5 {
		/**
		 * ISO 4217 of used currency
		 */
		currency?: string
		publicationDate?: TenderDate6
		/**
		 * ISO 4217 of used currency
		 */
		currencyNational?: string
		/**
		 * VAT percentage (0 if no VAT is paid)
		 */
		vat?: number
		/**
		 * Price without VAT
		 */
		netAmount?: number
		/**
		 * Price in national currency without VAT
		 */
		netAmountNational?: number
		/**
		 * Price in EUR without VAT
		 */
		netAmountEur?: number
		/**
		 * Price including VAT
		 */
		amountWithVat?: number
		/**
		 * Minimum reachable value of netAmount - typically given by range estimate or spread of bids
		 */
		minNetAmount?: number
		/**
		 * Maximum reachable value of netAmount - typically given by range estimate or spread of bids
		 */
		maxNetAmount?: number
		/**
		 * Minimum reachable value of amountWithVAT
		 */
		minAmountWithVat?: number
		/**
		 * Maximum reachable value of amountWithVAT
		 */
		maxAmountWithVat?: number
		[k: string]: unknown
}
/**
 * funding sources used (if none listed, implicitly assuming own budget of the body..)
 */
export interface Funding1 {
		/**
		 * Refined classification of sources (such as type of Operational programme etc..)
		 */
		programme?: string
		/**
		 * source
		 */
		source?: string
		/**
		 * Is the source from EU funds?
		 */
		isEuFund?: boolean
		[k: string]: unknown
}
export interface AwardCriterion {
		/**
		 * Name of criterion, PRICE if lowest price is used
		 */
		name?: string
		/**
		 * Weight of criterion (scale 0-100)
		 */
		weight?: number
		/**
		 * Broader description of the criterion
		 */
		description?: string
		/**
		 * Is the criterion directly related to price (monetary measurable)? such as price, lifetime costs, interest etc.
		 */
		isPriceRelated?: boolean
		[k: string]: unknown
}
export interface CPV1 {
		/**
		 * CPV code of the subject
		 */
		code?: string
		/**
		 * Is main cpv code of the subject
		 */
		isMain?: boolean
		/**
		 * Localized name of cpv
		 */
		name?: string
		[k: string]: unknown
}
export interface Publication {
		/**
		 * Identifier of publication on source
		 */
		sourceId?: string
		/**
		 * source of publication
		 */
		source?: string
		/**
		 * Url of tender on source, where human readable data are present, null if not available
		 */
		humanReadableUrl?: string
		/**
		 * Url of tender on source, where machine readable data are present, null if not available
		 */
		machineReadableUrl?: string
		/**
		 * Buyers custom identifier of publication
		 */
		buyerAssignedId?: string
		/**
		 * Identifier of tender on source
		 */
		sourceTenderId?: string
		publicationDate?: TenderDate12
		dispatchDate?: TenderDate13
		lastUpdate?: TenderDate5
		language?: Language
		formType?: FormType
		/**
		 * Source specific type of form
		 */
		sourceFormType?: string
		/**
		 * Are the refered publication data already merged into this publication package?
		 */
		isIncluded?: boolean
		/**
		 * isValid
		 */
		isValid?: boolean
		/**
		 * isParentTender
		 */
		isParentTender?: boolean
		version?: number
		[k: string]: unknown
}
/**
 * Metadata on document (.docx, .pdf...)
 */
export interface TenderDocument {
		title?: string
		language?: string
		/**
		 * Document url
		 */
		url?: string
		publicationDateTime?: TenderDateTime2
		type?: "CONTRACTOR_AGREEMENT"
		version?: number
		[k: string]: unknown
}
/**
 * correction
 */
export interface Correction {
		/**
		 * sectionNumber
		 */
		sectionNumber?: string
		/**
		 * lotNumber
		 */
		lotNumber?: number
		/**
		 * placeOfModifiedText
		 */
		placeOfModifiedText?: string
		/**
		 * original
		 */
		original?: string
		/**
		 * replacement
		 */
		replacement?: string
		/**
		 * originalDate
		 */
		originalDate?: string
		/**
		 * replacementDate
		 */
		replacementDate?: string
		/**
		 * originalCpvs
		 */
		originalCpvs?: CPV2[]
		/**
		 * replacementCpvs
		 */
		replacementCpvs?: CPV3[]
		/**
		 * originalValue
		 */
		originalValue?: {
				/**
				 * Document url
				 */
				currency?: string
				/**
				 * netAmount
				 */
				netAmount?: number
				[k: string]: unknown
		}
		/**
		 * replacementValue
		 */
		replacementValue?: {
				/**
				 * Document url
				 */
				currency?: string
				/**
				 * netAmount
				 */
				netAmount?: number
				[k: string]: unknown
		}
		[k: string]: unknown
}
/**
 * cpv code of the subject
 */
export interface CPV2 {
		/**
		 * CPV code of the subject
		 */
		code?: string
		/**
		 * Is main cpv code of the subject
		 */
		isMain?: boolean
		/**
		 * Localized name of cpv
		 */
		name?: string
		[k: string]: unknown
}
/**
 * cpv code of the subject
 */
export interface CPV3 {
		/**
		 * CPV code of the subject
		 */
		code?: string
		/**
		 * Is main cpv code of the subject
		 */
		isMain?: boolean
		/**
		 * Localized name of cpv
		 */
		name?: string
		[k: string]: unknown
}
export interface Address4 {
		/**
		 * Raw string for unstructured address
		 */
		rawAddress?: string
		/**
		 * Street including numbers
		 */
		street?: string
		city?: string
		state?: string
		postcode?: string
		/**
		 * Country Code: ISO 3166-1 alpha-2 = two letter
		 */
		country?: string
		/**
		 * URL
		 */
		url?: string
		/**
		 * Array of Nuts
		 */
		nuts?: (string | null)[]
		ot?: OpentenderAdditionalInformation
		[k: string]: unknown
}
export interface OpentenderAdditionalInformation1 {
		indicator?: IndicatorsAsFields
		score?: ScoresAsFields
		cpv?: CleanedMainCPV
		/**
		 * Array of Indicator Scores
		 */
		scores?: IndicatorScores[]
		date?: TenderDate14
		/**
		 * Country Code: ISO 3166-1 alpha-2 = two letter OR ('EU' == European Institutions)
		 */
		country?: string
		[k: string]: unknown
}
export interface IndicatorsAsFields {
		INTEGRITY_SINGLE_BID?: IndicatorScore1
		INTEGRITY_CALL_FOR_TENDER_PUBLICATION?: IndicatorScore1
		INTEGRITY_ADVERTISEMENT_PERIOD?: IndicatorScore1
		INTEGRITY_PROCEDURE_TYPE?: IndicatorScore1
		INTEGRITY_DECISION_PERIOD?: IndicatorScore1
		INTEGRITY_TAX_HAVEN?: IndicatorScore1
		INTEGRITY_NEW_COMPANY?: IndicatorScore1
		ADMINISTRATIVE_CENTRALIZED_PROCUREMENT?: IndicatorScore1
		ADMINISTRATIVE_ELECTRONIC_AUCTION?: IndicatorScore1
		ADMINISTRATIVE_COVERED_BY_GPA?: IndicatorScore1
		ADMINISTRATIVE_FRAMEWORK_AGREEMENT?: IndicatorScore1
		ADMINISTRATIVE_ENGLISH_AS_FOREIGN_LANGUAGE?: IndicatorScore1
		ADMINISTRATIVE_NOTICE_AND_AWARD_DISCREPANCIES?: IndicatorScore1
		TRANSPARENCY_NUMBER_OF_KEY_MISSING_FIELDS?: IndicatorScore1
		[k: string]: unknown
}
export interface ScoresAsFields {
		INTEGRITY?: IndicatorScore1
		ADMINISTRATIVE?: IndicatorScore1
		TRANSPARENCY?: IndicatorScore1
		TENDER?: IndicatorScore1
		[k: string]: unknown
}
export interface IndicatorScores {
		type?: ScoreType
		status?: IndicatorStatusType
		value?: IndicatorScore2
		[k: string]: unknown
}
