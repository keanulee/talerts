var needBridge = true;

var dt = [
	["AFGHANISTAN", "AF"],
	["ALAND ISLANDS", "AX"],
	["ALBANIA", "AL"],
	["ALGERIA", "DZ"],
	["AMERICAN SAMOA", "AS"],
	["ANDORRA", "AD"],
	["ANGOLA", "AO"],
	["ANGUILLA", "AI"],
	["ANTARCTICA", "AQ"],
	["ANTIGUA", "AG"],
	["BARBUDA", "AG"],
	["ARGENTINA", "AR"],
	["ARMENIA", "AM"],
	["ARUBA", "AW"],
	["AUSTRALIA", "AU"],
	["AUSTRIA", "AT"],
	["AZERBAIJAN", "AZ"],
	["BAHAMAS", "BS"],
	["BAHRAIN", "BH"],
	["BANGLADESH", "BD"],
	["BARBADOS", "BB"],
	["BELARUS", "BY"],
	["BELGIUM", "BE"],
	["BELIZE", "BZ"],
	["BENIN", "BJ"],
	["BERMUDA", "BM"],
	["BHUTAN", "BT"],
	["BOLIVIA, PLURINATIONAL STATE OF", "BO"],
	["BONAIRE, SINT EUSTATIUS AND SABA", "BQ"],
	["BOSNIA AND HERZEGOVINA", "BA"],
	["BOTSWANA", "BW"],
	["BOUVET ISLAND", "BV"],
	["BRAZIL", "BR"],
	["BRITISH INDIAN OCEAN TERRITORY", "IO"],
	["BRUNEI DARUSSALAM", "BN"],
	["BULGARIA", "BG"],
	["BURKINA FASO", "BF"],
	["BURUNDI", "BI"],
	["CAMBODIA", "KH"],
	["CAMEROON", "CM"],
	["CANADA", "CA"],
	["CAPE VERDE", "CV"],
	["CAYMAN ISLANDS", "KY"],
	["CENTRAL AFRICAN REPUBLIC", "CF"],
	["CHAD", "TD"],
	["CHILE", "CL"],
	["CHINA", "CN"],
	["CHRISTMAS ISLAND", "CX"],
	["COCOS (KEELING) ISLANDS", "CC"],
	["COLOMBIA", "CO"],
	["COMOROS", "KM"],
	["CONGO,", "CD"],
	["CONGO", "CG"],
	["COOK ISLANDS", "CK"],
	["COSTA RICA", "CR"],
	["COTE D'IVOIRE", "CI"],
	["CROATIA", "HR"],
	["CUBA", "CU"],
	["CURAÇAO", "CW"],
	["CYPRUS", "CY"],
	["CZECH REPUBLIC", "CZ"],
	["DENMARK", "DK"],
	["DJIBOUTI", "DJ"],
	["DOMINICA", "DM"],
	["DOMINICAN REPUBLIC", "DO"],
	["ECUADOR", "EC"],
	["EGYPT", "EG"],
	["EL SALVADOR", "SV"],
	["EQUATORIAL GUINEA", "GQ"],
	["ERITREA", "ER"],
	["ESTONIA", "EE"],
	["ETHIOPIA", "ET"],
	["FALKLAND ISLANDS", "FK"],
	["MALVINAS", "FK"],
	["FAROE ISLANDS", "FO"],
	["FIJI", "FJ"],
	["FINLAND", "FI"],
	["FRANCE", "FR"],
	["FRENCH GUIANA", "GF"],
	["FRENCH POLYNESIA", "PF"],
	["FRENCH SOUTHERN TERRITORIES", "TF"],
	["GABON", "GA"],
	["GAMBIA", "GM"],
	["GEORGIA", "GE"],
	["GERMANY", "DE"],
	["GHANA", "GH"],
	["GIBRALTAR", "GI"],
	["GREECE", "GR"],
	["GREENLAND", "GL"],
	["GRENADA", "GD"],
	["GUADELOUPE", "GP"],
	["GUAM", "GU"],
	["GUATEMALA", "GT"],
	["GUERNSEY", "GG"],
	["GUINEA", "GN"],
	["GUINEA-BISSAU", "GW"],
	["GUYANA", "GY"],
	["HAITI", "HT"],
	["HEARD", "HM"],
	["MCDONALD", "HM"],
	["VATICAN", "VA"],
	["HONDURAS", "HN"],
	["HONG KONG", "HK"],
	["HUNGARY", "HU"],
	["ICELAND", "IS"],
	["INDIA", "IN"],
	["INDONESIA", "ID"],
	["IRAN", "IR"],
	["IRAQ", "IQ"],
	["IRELAND", "IE"],
	["ISLE OF MAN", "IM"],
	["ISRAEL", "IL"],
	["ITALY", "IT"],
	["JAMAICA", "JM"],
	["JAPAN", "JP"],
	["JERSEY", "JE"],
	["JORDAN", "JO"],
	["KAZAKHSTAN", "KZ"],
	["KENYA", "KE"],
	["KIRIBATI", "KI"],
	["NORTH KOREA", "KP"],
	["SOUTH KOREA", "KR"],
	["KUWAIT", "KW"],
	["KYRGYZSTAN", "KG"],
	["LAO", "LA"],
	["LATVIA", "LV"],
	["LEBANON", "LB"],
	["LESOTHO", "LS"],
	["LIBERIA", "LR"],
	["LIBYA", "LY"],
	["LIECHTENSTEIN", "LI"],
	["LITHUANIA", "LT"],
	["LUXEMBOURG", "LU"],
	["MACAO", "MO"],
	["MACEDONIA", "MK"],
	["MADAGASCAR", "MG"],
	["MALAWI", "MW"],
	["MALAYSIA", "MY"],
	["MALDIVES", "MV"],
	["MALI", "ML"],
	["MALTA", "MT"],
	["MARSHALL ISLANDS", "MH"],
	["MARTINIQUE", "MQ"],
	["MAURITANIA", "MR"],
	["MAURITIUS", "MU"],
	["MAYOTTE", "YT"],
	["MEXICO", "MX"],
	["MICRONESIA", "FM"],
	["MOLDOVA", "MD"],
	["MONACO", "MC"],
	["MONGOLIA", "MN"],
	["MONTENEGRO", "ME"],
	["MONTSERRAT", "MS"],
	["MOROCCO", "MA"],
	["MOZAMBIQUE", "MZ"],
	["MYANMAR", "MM"],
	["NAMIBIA", "NA"],
	["NAURU", "NR"],
	["NEPAL", "NP"],
	["NETHERLANDS", "NL"],
	["NEW CALEDONIA", "NC"],
	["NEW ZEALAND", "NZ"],
	["NICARAGUA", "NI"],
	["NIGER", "NE"],
	["NIGERIA", "NG"],
	["NIUE", "NU"],
	["NORFOLK ISLAND", "NF"],
	["NORTHERN MARIANA ISLANDS", "MP"],
	["NORWAY", "NO"],
	["OMAN", "OM"],
	["PAKISTAN", "PK"],
	["PALAU", "PW"],
	["PALESTIN", "PS"],
	["PANAMA", "PA"],
	["PAPUA NEW GUINEA", "PG"],
	["PARAGUAY", "PY"],
	["PERU", "PE"],
	["PHILIPPINES", "PH"],
	["PITCAIRN", "PN"],
	["POLAND", "PL"],
	["PORTUGAL", "PT"],
	["PUERTO RICO", "PR"],
	["QATAR", "QA"],
	["REUNION", "RE"],
	["ROMANIA", "RO"],
	["RUSSIA", "RU"],
	["RWANDA", "RW"],
	["SAINT BARTHÉLEMY", "BL"],
	["SAINT HELENA", "SH"],
	["ASCENSION", "SH"],
	["CUNHA", "SH"],
	["SAINT KITTS AND NEVIS", "KN"],
	["SAINT LUCIA", "LC"],
	["SAINT MARTIN", "MF"],
	["SAINT PIERRE", "PM"],
	["MIQUELON", "PM"],
	["SAINT VINCENT", "VC"],
	["GRENADINES", "VC"],
	["SAMOA", "WS"],
	["SAN MARINO", "SM"],
	["SAO TOME AND PRINCIPE", "ST"],
	["SAUDI ARABIA", "SA"],
	["SENEGAL", "SN"],
	["SERBIA", "RS"],
	["SEYCHELLES", "SC"],
	["SIERRA LEONE", "SL"],
	["SINGAPORE", "SG"],
	["SINT MAARTEN", "SX"],
	["SLOVAKIA", "SK"],
	["SLOVENIA", "SI"],
	["SOLOMON ISLANDS", "SB"],
	["SOMALIA", "SO"],
	["SOUTH AFRICA", "ZA"],
	["SOUTH GEORGIA", "GS"],
	["SOUTH SANDWICH", "GS"],
	["SOUTH SUDAN", "SS"],
	["SPAIN", "ES"],
	["SRI LANKA", "LK"],
	["SUDAN", "SD"],
	["SURINAME", "SR"],
	["SVALBARD AND JAN MAYEN", "SJ"],
	["SWAZILAND", "SZ"],
	["SWEDEN", "SE"],
	["SWITZERLAND", "CH"],
	["SYRIA", "SY"],
	["TAIWAN", "TW"],
	["TAJIKISTAN", "TJ"],
	["TANZANIA", "TZ"],
	["THAILAND", "TH"],
	["TIMOR-LESTE", "TL"],
	["TOGO", "TG"],
	["TOKELAU", "TK"],
	["TONGA", "TO"],
	["TRINIDAD", "TT"],
	["TOBAGO", "TT"],
	["TUNISIA", "TN"],
	["TURKEY", "TR"],
	["TURKMENISTAN", "TM"],
	["TURKS", "TC"],
	["CAICOS", "TC"],
	["TUVALU", "TV"],
	["UGANDA", "UG"],
	["UKRAINE", "UA"],
	["UNITED ARAB EMIRATES", "AE"],
	["UNITED KINGDOM", "GB"],
	["UNITED STATES", "US"],
	["UNITED STATES MINOR OUTLYING ISLANDS", "UM"],
	["URUGUAY", "UY"],
	["UZBEKISTAN", "UZ"],
	["VANUATU", "VU"],
	["VENEZUELA", "VE"],
	["VIET NAM", "VN"],
	["VIRGIN ISLANDS, BRITISH", "VG"],
	["VIRGIN ISLANDS, U.S.", "VI"],
	["WALLIS", "WF"],
	["FUTUNA", "WF"],
	["WESTERN SAHARA", "EH"],
	["YEMEN", "YE"],
	["ZAMBIA", "ZM"],
	["ZIMBABWE", "ZW"]
];

function geolocationError(error)
{
	$(".ui-btn-text", $("#locate")).html('Locate');
}

function geolocationSuccess(position)
{
	var lat = position.coords.latitude;
	var lon = position.coords.longitude;
	var country;
	
	var mapsAPI = 'http://maps.googleapis.com/maps/api/geocode/json?sensor=true&latlng=';
	if (needBridge) mapsAPI = 'map.php?latlng=';
	
	var d = new Date();
		
	$.getJSON(mapsAPI+lat+','+lon+'&timestamp='+d.getTime(), function (data) {
		$.each(data["results"][0]["address_components"], function (i, comp) {
			if ($.inArray("country",comp["types"]) > -1) {
				country = comp["short_name"];
				$(".ui-input-text").val(searchByCode(country)).change();
				$(".ui-btn-text", $("#locate")).html('Locate');
				return;
			}
		});
	});
}

function searchByName(name) {
	var res = false;
	$.each(dt, function(i,ct) {
		if (name.toUpperCase().indexOf(ct[0]) > -1) {
			res = ct[1].toLowerCase();
			return;
		}
	});
	return res;
}

function searchByCode(code) {
	var res = false;
	$.each(dt, function(i,ct) {
		if (ct[1] == code) {
			res = ct[0];
			return;
		}
	});
	return res;
}

function openLink(href) {
	if (needBridge) window.location = href;
	else {
		var args = new blackberry.invoke.BrowserArguments(href);
		blackberry.invoke.invoke(blackberry.invoke.APP_BROWSER, args);
	}
}

$(document).ready(function() {
	var RSS = "http://feeds.travel.state.gov/ca/travelwarnings-alerts";
	if (needBridge) RSS = "bridge.php?fwd=http://feeds.travel.state.gov/ca/travelwarnings-alerts";

	var entries = [];
	var selectedEntry = "";

	$(".contentLink").live("click", function() {
		selectedEntry = $(this).data("entryid");
	});

	$("h1", this).text("Travel Alerts");
	$(".ui-input-text").attr("placeholder","Search Location...");
	
	$("#locate").click(function() {
		$(".ui-btn-text", this).html('<img src="images/ajax_locate.gif" style="width:12px; height:12px;" title="Loading..." />');
		navigator.geolocation.getCurrentPosition(geolocationSuccess, geolocationError);
	});

	var d = new Date();
		
	$("#refresh").click(function() {
		$(".ui-btn-text", this).html('<img src="images/ajax.gif" style="width:12px; height:12px;" title="Loading..." />');
	
		$.get(RSS+"?timestamp="+d.getTime(), {}, function(res, code) {
			$(".ui-input-text").val("").change();
			var d = new Date();
			$("#lastUpdate").html("Last Updated: " + d.toLocaleString());
			
			$("#linksList").html('');
			entries = [];
		
			var xml = $(res);
			var items = xml.find("item");
			$.each(items, function(i, v) {
				var country = $(v).find("title").text().replace(" Travel","").replace(" Warning","").replace(" Alert","");
				entry = { 
					title:country, 
					link:$(v).find("link").text(), 
					description:$.trim($(v).find("description").text()),
					code:searchByName(country)
				};
				entries.push(entry);
			});

			entries.sort(function(entry1,entry2){ 
				if (entry1.title > entry2.title) return 1;
				else return -1; 
			});

			var s = '';
			$.each(entries, function(i, v) {
				s += '<li><a href="#contentPage" class="contentLink" data-entryid="'+i+'">';
				if (v.code) s += '<img class="ui-li-icon" src="flags/' + v.code + '.gif" />';
				else s += '<img class="ui-li-icon" />';
				s += v.title + '</a></li>';
			});
			$("#linksList").append(s);
			$("#linksList").listview("refresh");
			
			$(".ui-btn-text", $("#refresh")).html('<br />');
		});
	});

	$("#refresh").click();

	$("#contentPage").live("pageshow", function(prepage) {
		$("h1", this).text(entries[selectedEntry].title);
		if (entries[selectedEntry].code) $("h1", this).prepend('<img class="ui-li-icon" src="flags/' + entries[selectedEntry].code + '.gif" /> ');
		$("#entryText",this).html(entries[selectedEntry].description);
		$.each($("a",$("#entryText")), function(i,link) {
			$(link).attr("onclick","openLink('"+$(link).attr("href")+"');").attr("href","#");
		});
	});
});
