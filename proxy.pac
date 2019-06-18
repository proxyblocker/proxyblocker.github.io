function FindProxyForURL(url, host) {
	if (shExpMatch(url, "*.mtka.org*")) {
		return "PROXY 10.1.1.99:8080";
	}


	return "DIRECT";
}
