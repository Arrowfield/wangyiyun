package org.field.json;

import net.sf.json.JSONObject;

public class GetJsonData {

	public static void main(String[] args) {
		JSONObject json = new JSONObject();
		json.put("uname", "����");
		json.put("password", "123456");
		System.out.print(json.toString());
	}

}
