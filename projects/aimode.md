---
layout: default
permalink: /projects/aimode/
---

<div class="section" markdown="1">

# Tool use in Google Search AI Mode

<div class="project-hero">
  <img src="/assets/images/aimode.webp" alt="AI Mode project">
</div>

## Overview

My current work at Google Search focuses on direct tool use of Gemini. In Google Search AI Mode, Gemini calls various search tools to enhance their capabilities.

My recent work is building infrastructure to stress test tools for their reliability, such that Gemini can be tuned to perform best on tool use.

[→ Learn more about tool use in Gemini](https://ai.google.dev/gemini-api/docs/tools)


## Challenges

Language models use tools to find data, execute code, and interact with other systems. Gemini, Google's LLM, can call functions of Google-internal tools (Search, Maps, Flights, ...) or third-party tools. 

In post-training, LLMs can be tuned to call function and follow function interfaces. This helps the LLM learn to decide when to call functions and which function to pick. 

At inference time, LLMs can be given function declarations as context. This allows to expose new functions to LLMs without having to do any additional training. 

Misdeclerations and ambiguities in the function I/O give LLMs a hard time. 
* Parameters might not behave as expected. For search tools, this means too broad results that might not be relevant. 
* Parameters might be passed in the wrong format. This can lead to empty or unexpected results.
* Results might not match the exact request, which deteriorates search result quality. 

Thus, defining clear interfaces and reliable responses are key for building strong tools for function calling.

## Technical Details

* [MCP](https://modelcontextprotocol.io/docs/getting-started/intro) is a protocol that defines a standardized interface for function calling
* [Gemini function calling](https://ai.google.dev/gemini-api/docs/function-calling) gives details on how to declare functions and how they get called by Gemini


</div>
