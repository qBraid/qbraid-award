[<img src="https://qbraid-static.s3.amazonaws.com/logos/Launch_on_qBraid_white.png" width="150">](https://account.qbraid.com?gitHubUrl=https://github.com/qBraid/qbraid-award.git)

# qBraid Award: Most Creative Use of qBraid

The qBraid Award goes to the team that makes the most creative use of [qBraid](https://account.qbraid.com) at your hackathon. It's not a separate challenge: any team in any track can win it with the project you're already building. To enter, you send us a **3 to 5 minute video** showing what you did on qBraid.

| | |
|---|---|
| **Who can enter** | Every team, in every track |
| **What you submit** | One 3 to 5 minute video: a screen recording of your project running on qBraid |
| **Where** | The entry form for your event ([below](#your-event)): team name, video link, one team member's qBraid email |
| **Prize** | $200 in gift cards split across the winning team, plus 1,000 qBraid credits for each member |
| **Judged on** | Did it run on qBraid, and how creatively did you use it? ([details](#how-we-judge)) |

**Contents:** [Your event](#your-event) · [How to enter](#how-to-enter) · [Ideas](#ideas-for-using-qbraid) · [The video](#the-video) · [Optional slides](#optional-slides) · [Code you can copy](#code-you-can-copy) · [How we judge](#how-we-judge) · [Checklist](#before-you-submit) · [FAQ](#faq) · [Links](#links)

---

## Your event

| Event | Dates | Entries due | Entry form | Discord |
|---|---|---|---|---|
| Intermountain Quantum Competition (BYU, Provo) | Nov 6 to 7, 2026 | **Sat Nov 7, 9:00am MST** | [Alex to add: form link] | [Join](https://discord.gg/7mWPs3HGc) |
| TN Quantum Hackathon, Chattanooga | Nov 13 to 15, 2026 | **Sunday 9:00am**, with your final submission | [Alex to add: form link] | [Alex to add: Discord link] |

**Intermountain Quantum Competition:** the award sits on top of whichever sponsor challenge your team is on. To get free credits and real hardware, join the IQC organization on qBraid with the invite link [Alex to add: org invite link]. qBraid gives a live platform walkthrough on Friday at 11:15am MST. Videos are due Saturday at 9:00am MST, before the 3:00pm presentations, and the winner gets a certificate at the 5:00pm awards.

**TN Quantum Hackathon:** the winner is announced at the closing ceremony at The Landing Social House. If you want to run on Quantinuum through qBraid, each team member first creates a Quantinuum Nexus account and accepts its terms, which takes under a minute. Everyone who completes the weekend also gets a qBraid completion certificate with a verification link.

---

## How to enter

1. **Use qBraid in your project.** You don't need to change what you're building. Use qBraid where it helps.
2. **Record a 3 to 5 minute video** of your project running on qBraid ([what to show](#the-video)).
3. **Fill in the entry form** for your event before the deadline: your team name, the video link, and the qBraid account email of one team member so we can send the prize. It takes about a minute, and you can edit your entry until the deadline.

---

## Ideas for using qBraid

Any of these can be the core of a strong entry. One used well beats all of them used briefly.

- **Run on real quantum hardware.** Send your circuit to a QPU and compare the result with a simulator. Prices and live status for every device are in the [device catalog](https://account.qbraid.com/devices).
- **Use AI on qBraid (encouraged).** Ask [AI Chat](https://docs.qbraid.com/v2/ai/user-guide/overview) in your qBraid account to compare devices or explain a result, run a coding agent with Agent mode, or connect your own AI tool (Claude, Cursor, VS Code) to qBraid through the MCP server at `https://mcp.qbraid.com/mcp`. Show what you had it do and where you stepped in.
- **Push past your laptop with GPU simulators.** qBraid's GPU state-vector simulator handles circuits up to 35 qubits.
- **Compare devices.** Run the same circuit on two different kinds of hardware, superconducting and trapped-ion for example, and explain the difference.
- **Write once, run anywhere.** Write in Qiskit, Cirq, Braket or OpenQASM and run on a device that expects another format. The [qBraid transpiler](https://docs.qbraid.com/sdk/user-guide/transpiler) handles the conversion.
- **Make it reproducible.** Put your work in a repo with a Launch on qBraid button so anyone can open it in [qBraid Lab](https://docs.qbraid.com/lab/user-guide/getting-started) in one click.

**What doesn't count on its own:** signing up, running local code in a qBraid notebook, copying a tutorial unchanged, or a single "hello world" job unconnected to your project.

---

## The video

A screen recording of 3 to 5 minutes, with someone on your team talking through it. It doesn't need editing or polish: we care that it shows qBraid doing real work.

**What to show:**

| Time | Show |
|---|---|
| 0:00 to 0:30 | Your team, your challenge, and what you built, in a sentence or two |
| 0:30 to 3:00 | **qBraid doing the work, on screen:** your notebook running in qBraid Lab, a job going to a simulator or quantum hardware, results coming back on the Jobs page. Say which qBraid features you used |
| 3:00 to 4:30 | Your best result: one chart or comparison (simulator vs. hardware works great), plus **where AI helped** and where you stepped in |
| Last 30 seconds | What you'd try next |

**One rule:** we have to *see* it run on qBraid. Show the job, the device and the results on screen. That's how we check entries, so you don't need to send job IDs.

**How to record:**

- On a Mac, press Cmd+Shift+5. On Windows, use the Snipping Tool's record option. [Loom](https://www.loom.com) or a Zoom recording of yourself sharing your screen also works.
- Upload it as **unlisted on YouTube**, to Loom, or to Google Drive with "anyone with the link can view".
- Keep it under 5 minutes. Judges stop watching after that.

---

## Optional slides

If you want slides in your video, use our template. **Slides are optional**, and the video is what we judge.

- **Template:** [`qbraid-award-template.pptx`](./template/qbraid-award-template.pptx). It opens in PowerPoint, Keynote or Google Slides (in Google Drive, choose New > File upload, then open it with Google Slides).
- **Finished example:** [`qbraid-award-example.pptx`](./template/qbraid-award-example.pptx), or [as a PDF](./template/qbraid-award-example.pdf). The team is made up and the numbers are illustrative.

The most useful one is the features slide: keep a tile for every qBraid feature you used, and delete the rest.

![Example slide: qBraid features we used](./images/example-1.png)

<details>
<summary>The other two example slides</summary>

![Example slide 2: Our best qBraid moment](./images/example-2.png)

![Example slide 3: Check it](./images/example-3.png)

</details>

---

## Code you can copy

This runs one circuit on qBraid's GPU simulator and on real hardware, prints the job IDs, and draws the simulator vs. hardware chart you can show in your video. Swap in your own circuit and device. Device IDs are in the [device catalog](https://account.qbraid.com/devices).

```python
from qbraid.runtime import QbraidProvider
from qbraid.visualization import plot_histogram

provider = QbraidProvider()  # in qBraid Lab, your account is picked up automatically

sim = provider.get_device("qbraid:qbraid:sim:gpu-sv")  # qBraid GPU simulator
qpu = provider.get_device("aws:iqm:qpu:garnet")        # real hardware: check the price first

sim_job = sim.run(circuit, shots=1000)
qpu_job = qpu.run(circuit, shots=200)
print(sim_job.id, qpu_job.id)  # job IDs

sim_counts = sim_job.result().data.get_counts()
qpu_counts = qpu_job.result().data.get_counts()
plot_histogram([sim_counts, qpu_counts])  # simulator vs. hardware chart
```

More in the docs: [running on qBraid](https://docs.qbraid.com/sdk/user-guide/providers/native), [working with jobs](https://docs.qbraid.com/sdk/user-guide/providers/jobs) and [plotting results](https://docs.qbraid.com/sdk/user-guide/visualization).

**Save credits and time:**

- Get your circuit right on a simulator before you send it to hardware.
- Hardware charges per job plus per shot, so pack as much as you can into each job and choose your shot count on purpose.
- Hardware queues can be long, so send hardware jobs early in the event, not an hour before the deadline.

---

## How we judge

qBraid staff watch every video after the deadline, separately from track judging. For each one:

1. **Did it clearly run on qBraid?** If we can't see qBraid doing real work on screen, the entry is out.
2. **How creatively did you use qBraid?** We score it from 1 to 5. Using several features well, comparing devices, a clever use of AI, or a clear result someone outside quantum can follow all push the score up.

We re-watch the top two and pick the winner.

- **Spending more credits doesn't help.** A careful, cheap hardware run beats an expensive one.
- **Using AI is encouraged.** Show what you had it do and where you checked its work.

---

## Before you submit

- [ ] Your video is 3 to 5 minutes, and the link opens for anyone
- [ ] It shows qBraid running on screen: notebook, jobs and results
- [ ] You say which qBraid features you used, and where AI helped if you used it
- [ ] The entry form is filled in, with one team member's qBraid email, before the deadline

---

## FAQ

**Do we have to change our project?** No. Show how qBraid fits into what you're already building.

**Does entering affect our track judging?** No. The award is judged separately, and your track result doesn't affect it.

**We only used simulators. Can we still win?** Yes. Hardware isn't required, and a creative use of the simulators counts.

**Can we use AI?** Yes, please. Tell us in your video what it did and where you stepped in.

**Do we need slides?** No. The video is all we judge. Use the [template](#optional-slides) if slides help you tell the story.

**Can we edit our entry after submitting?** Yes, until the deadline.

**How do we get the prize if we win?** We announce the winner at the event and email the team through the qBraid email on your entry.

---

## Links

- [qBraid account](https://account.qbraid.com) and [device catalog](https://account.qbraid.com/devices)
- [qBraid docs](https://docs.qbraid.com) and [getting started in qBraid Lab](https://docs.qbraid.com/lab/user-guide/getting-started)
- [qBraid SDK on GitHub](https://github.com/qBraid/qBraid)
- Optional slides: [template (.pptx)](./template/qbraid-award-template.pptx) · [example (.pptx)](./template/qbraid-award-example.pptx) · [example (PDF)](./template/qbraid-award-example.pdf)
- [qBraid AI](https://docs.qbraid.com/v2/ai/user-guide/overview) (AI Chat, Agent mode, MCP server) and the [qBraid CLI](https://docs.qbraid.com/v2/cli/user-guide/overview)
- Questions: ask a qBraid mentor at your event or in your event's Discord ([Intermountain](https://discord.gg/7mWPs3HGc)), or email alex@qbraid.com
