package org.jvm;

import java.io.File;
import java.util.LinkedList;
import java.util.List;

import net.masterthought.cucumber.Configuration;
import net.masterthought.cucumber.ReportBuilder;

public class JvmGenarate {
	public static void genarateJvm(String jsonPath) {

		// *Mention the folder location - File
		File f = new File("C:\\Users\\ADMIN\\eclipse-workspace\\CucumberNew3pmBatch\\JvmFolder");

		// *Add details to the report using Configuration class ----
		// addClassifications("point1","point2")
		Configuration c = new Configuration(f, "facebook & amazon");
		c.addClassifications("platformname", "windows");
		c.addClassifications("platformversion", "10");
		c.addClassifications("browsername", "chrome");
		c.addClassifications("browserverion", "122");
		// *Add json file paths into List<String>
		List<String> li = new LinkedList<String>();
		li.add(jsonPath);
		// Create object for ReportBuilder class and using the created object call
		// generateReports() method.
		ReportBuilder r = new ReportBuilder(li, c);
		r.generateReports();

	}

}
