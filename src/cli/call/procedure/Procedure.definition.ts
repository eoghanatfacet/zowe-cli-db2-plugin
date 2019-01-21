/*
* This program and the accompanying materials are made available under the terms of the *
* Eclipse Public License v2.0 which accompanies this distribution, and is available at *
* https://www.eclipse.org/legal/epl-v20.html                                      *
*                                                                                 *
* SPDX-License-Identifier: EPL-2.0                                                *
*                                                                                 *
* Copyright Contributors to the Zowe Project.                                     *
*                                                                                 *
*/

import { ICommandDefinition } from "@brightside/imperative";

export const ProcedureDefinition: ICommandDefinition = {
    name: "procedure",
    aliases: ["proc", "sp"],
    type: "command",
    summary: "Call a Db2 stored procedure",
    description: "Call a Db2 stored procedure. " +
        "Specify the stored procedure name and optionally provide values.",
    handler: __dirname + "/Procedure.handler",
    profile: {
        required: ["db2"],
    },
    positionals: [
        {
            name: "routine",
            type: "string",
            description: "The name of a Db2 stored procedure",
            required: true,
        },
    ],
    options: [
        {
            name: "parameters",
            aliases: ["p"],
            type: "array",
            description: "Values to bind to the stored procedure parameters",
            required: false,
        },
    ],
    examples: [
        {
            description: "Call stored procedure DEMO.SP1",
            options: "\"DEMO.SP1\"",
        },
        {
            description: "Call a stored procedure and pass values for parameter indicators",
            options: "\"DEMO.SP2(?, ?)\" --parameters \"Hello\" \"world!\"",
        },
    ],
};