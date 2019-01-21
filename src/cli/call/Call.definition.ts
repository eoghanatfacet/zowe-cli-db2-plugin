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
import { ProcedureDefinition } from "./procedure/Procedure.definition";

export const Call: ICommandDefinition = {
    name: "call",
    type: "group",
    experimental: true,
    summary: "Call a stored procedure",
    description: "Call a Db2 stored procedure",
    children: [
        ProcedureDefinition,
    ],
};

module.exports = Call;