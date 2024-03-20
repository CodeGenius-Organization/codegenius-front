import React from "react";

import './ModuleList.css'
import Module from "../module/Module";

function ModuleList({ modules, onLessonClick }) {

    return (
        <>
            <div className="module-list-container">
                <span className="title">Lista de módulos:</span>
                <div className="modules_container">
                    <div className="modules_list">
                        {modules && modules.map((module) => (
                            <Module
                                module={module}
                                key={module.id}
                                onLessonClick={onLessonClick}
                                moduleId={module.id} />
                        ))}
                    </div>
                </div>
            </div>
        </>
    )
}

export default ModuleList