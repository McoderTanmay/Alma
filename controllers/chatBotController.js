import { spawn } from "child_process";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

async function queryAIController(req, res) {
  try {
    const { userQuery } = req.body;

    if (!userQuery) {
      return res.status(400).json({ message: "User query is required." });
    }

    // Define the Python script path
    const scriptPath = path.join(__dirname, "../AI/ai.py");

    // Spawn the Python process
    const pythonProcess = spawn("python", [scriptPath, userQuery]);

    let scriptOutput = "";
    let scriptError = "";

    // Listen for script stdout data
    pythonProcess.stdout.on("data", (data) => {
      scriptOutput += data.toString();
      console.log(`stdout: ${data}`);
    });

    // Listen for script stderr data
    pythonProcess.stderr.on("data", (data) => {
      scriptError += data.toString();
      console.error(`stderr: ${data}`);
    });

    // Handle script process close
    pythonProcess.on("close", (code) => {
      if (code !== 0) {
        return res.status(500).json({
          message: "Python script failed",
          error: scriptError || "Unknown error",
        });
      }

      // Return the response from the Python script
      return res.json({
        message: "AI query processed successfully",
        query: userQuery,
        response: scriptOutput,
      });
    });
  } catch (error) {
    console.error("Error processing AI query:", error);
    return res.status(500).json({ message: "Internal server error", error: error.message });
  }
}

export { queryAIController };
